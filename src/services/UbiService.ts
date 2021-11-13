import * as dotenv from 'dotenv';
import { Player, PlayerAllPlatform} from '../types/player'
const r6api = require('@vince144/r6-api');

dotenv.config()



/*
const email = process.env.UBI_EMAIL;
const password = process.env.UBI_PASSWORD;

class UbiService {
    
    async createSession(){
        const account = r6api.createAccount(email, password, platform);
        const session = await r6api.createSession(account)
    }
    
}

export default UbiService;
*/