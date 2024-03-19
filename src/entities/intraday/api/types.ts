// Define types for the API response
export interface MetaData {
  information: string
  symbol: string
  lastRefreshed: string
  interval: string
  outputSize: string
  timeZone: string
}

export interface IntraDayData {
  datetime: string
  open: string
  high: string
  low: string
  close: string
  volume: string
  completed: boolean
}

export interface APIResponse<T> {
  // @ts-ignore
  'Meta Data': MetaData
  [key: string]: T
}
