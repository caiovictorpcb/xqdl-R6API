export interface Player {
        username: string
        platform: string
        id: string
        rank: any
        kills: any
        deaths: any
}
export interface PlayerPayload {
        id: '0b95544b-0228-49a7-b338-6d15cfbc3d6a',
        userId: '0b95544b-0228-49a7-b338-6d15cfbc3d6a',
        idOnPlatform: '0B95544B-0228-49A7-B338-6D15CFBC3D6A',
        platform: 'uplay',
        username: 'Daniel.Nt',
        avatar: {
                '146': 'https://ubisoft-avatars.akamaized.net/0b95544b-0228-49a7-b338-6d15cfbc3d6a/default_146_146.png',
                '256': 'https://ubisoft-avatars.akamaized.net/0b95544b-0228-49a7-b338-6d15cfbc3d6a/default_256_256.png',
                '500': 'https://ubisoft-avatars.akamaized.net/0b95544b-0228-49a7-b338-6d15cfbc3d6a/default_tall.png'
        }
}
export interface PlayersPayload {
        players:PlayerPayload[]
}
export interface PlayerAvatar {
        146: string
        256: string
        500: string
}

export enum PlayerAllPlatform {
        steam = "steam",
        epic = "epic",
        amazon = "amazon",
        uplay = "uplay",
        psn = "psn",
        xbl = "xbl",
}
