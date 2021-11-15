import * as dotenv from 'dotenv';
import { Session, Player, ActualStats } from '../types/api';

const r6api = require('@vince144/r6-api');

dotenv.config()

const UbiEmail = process.env.UBI_EMAIL;
const UbiPassword = process.env.UBI_PASSWORD;
const UbiPlatform = process.env.UBI_PLATFORM;
const PlayerPlatform = process.env.UBI_PLATFORM;

const PlayerUsername = 'caio._.';


class R6Service {
    
    async createSession():Promise<Session | undefined>{
        const account = await r6api.createAccount(UbiEmail, UbiPassword, UbiPlatform);
        return await r6api.createSession(account)
    }

    async getPlayer():Promise<Player | undefined>{
        const session = await this.createSession()
        if (session) return await r6api.createPlayer(PlayerUsername, PlayerPlatform, session)
        return undefined
    }
    
    async getStats():Promise<ActualStats | undefined>{
        const player = await this.getPlayer()
        const session = await this.createSession()
        if(player && session) return await r6api.getStats(player, session)
        return undefined
    }
}

export default new R6Service();