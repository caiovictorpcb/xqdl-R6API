export interface Player {
    username: string
    platform: string
    id: string
    rank: any
    kills: any
    deaths: any
}


export enum Platforms {
  UPLAY  = "uplay",
  STEAM = "steam",
  XBOX = 'xbox',
  PSN = 'psn'
}

export interface Session{
    appId: string
    spaceId: string
    sessionId: string
    token: string
    startDate: string
    endDate: string
  }

 export interface ActualStats {
    players: {
      playerId: {
        max_mmr: number
        skill_mean: number
        deaths: number
        profile_id: string
        next_rank_mmr: number
        rank: number
        max_rank: number
        board_id: string
        skill_stdev: number
        kills: number
        last_match_skill_stdev_change: number
        update_time: string
        last_match_mmr_change: number
        abandons: number
        season: number
        top_rank_position: number
        last_match_skill_mean_change: number
        mmr: number
        previous_rank_mmr: number
        last_match_result: number
        wins: number
        region:string
        losses: number
      }
    }
  }