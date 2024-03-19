import { APIResponse, IntraDayData } from '@/entities/intraday/api/types.ts'
import { JSONPLACEHOLDER_API_URL } from '@/shared/config'
import axios from 'axios'

export const fetchData = async () => {
  try {
    const response = await axios.get<APIResponse<IntraDayData>>(
      JSONPLACEHOLDER_API_URL,
    )

    const responseData = response.data

    // Access and process intraday data
    const timeSeriesKey = Object.keys(responseData).find(
      (key) => key !== 'Meta Data',
    )

    if (timeSeriesKey) {
      const intradayData = Object.entries(responseData[timeSeriesKey]).map(
        ([timestamp, data]) => ({
          datetime: timestamp,
          open: data['1. open'] as string,
          high: data['2. high'] as string,
          low: data['3. low'] as string,
          close: data['4. close'] as string,
          volume: data['5. volume'] as string,
          completed: false,
        }),
      )

      return intradayData
    } else {
      throw new Error('No intraday data found.')
    }
  } catch (error) {
    throw new Error(`Error fetching data`)
  }
}
