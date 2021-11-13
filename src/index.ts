import express, { Application, Request, Response } from "express";
import morgan from "morgan";
import swaggerUi from "swagger-ui-express";
import cors from 'cors'
import Router from "./routes/index";

const PORT = process.env.PORT || 8000;

const app: Application = express();
app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));
app.use(express.static("public"));

app.use(
  "/docs",
  swaggerUi.serve,
  swaggerUi.setup(undefined, {
    swaggerOptions: {
      url: "/swagger.json",
    },
  })
);

app.use(Router);
app.listen(PORT, () => {
    console.log(`Rodando em http://localhost:${PORT}`)
  })