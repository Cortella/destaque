enum ExpiresTime {
  ONE_DAY = '1d',
  ONE_WEEK = '7d',
  HALF_MONTH = '15d',
  ONE_MONTH = '30d',
  HALF_YEAR = '180d',
}

export interface IAuth {
  secret_token: string
  expires_in_token: ExpiresTime
  secret_refresh_token: string
  expires_in_refresh_token: ExpiresTime
  expires_refresh_token_days: number
}

export const auth: IAuth = {
  secret_token: 'a45c9c8554c06ba71984e826221f9862',
  expires_in_token: ExpiresTime.HALF_MONTH,
  secret_refresh_token: '316bcffe6027411a385430e5e27e7fce',
  expires_in_refresh_token: ExpiresTime.ONE_MONTH,
  expires_refresh_token_days: 30,
}
