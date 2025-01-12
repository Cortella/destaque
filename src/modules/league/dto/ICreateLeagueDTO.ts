export interface ICreateLeagueDTO {
    name:string;
    isPublic: boolean;
    adminId: string;
    isOficial: boolean;
    moderators?: { id: string; name: string }[]
    pointsperFullHit: number;
    pointsPerResult: number;
    pointsPerTeamGoals: number;
    boostPerRound: number;
    year: number;
}