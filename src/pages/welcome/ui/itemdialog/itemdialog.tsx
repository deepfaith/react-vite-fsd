import { IntraDayData } from '@/entities/intraday/api'

export const ItemDialog = ({ item }) => {
  const { datetime, open, high, volume, close, low } = item as IntraDayData

  return (
    <ul>
      <li>
        <strong>Date Time:</strong> {datetime}
      </li>
      <li>
        <strong>1. open:</strong> {open}
      </li>
      <li>
        <strong>2. high:</strong> {high}
      </li>
      <li>
        <strong>3. low:</strong> {low}
      </li>
      <li>
        <strong>4. close:</strong> {close}
      </li>
      <li>
        <strong>5. volume:</strong> {volume}
      </li>
    </ul>
  )
}
