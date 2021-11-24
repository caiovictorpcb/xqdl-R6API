import axios from 'axios'
import * as dotenv from 'dotenv';
dotenv.config()

const API_KEY = process.env.API_KEY;



class ApiService {

    async getGenericStats(username:string, platform:string){
        const url = encodeURI(`https://api2.r6stats.com/public-api/stats/${username}/pc/generic`)
        const { data } = await axios.get(url, {
            headers: {
            Authorization: `Bearer ${API_KEY}`,
            },
        })
        return data
}}


export default new ApiService();