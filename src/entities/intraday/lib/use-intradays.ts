import { useEffect, useState } from 'react'
import { IntraDayData, fetchData } from '../api'

export const useIntradays = () => {
  const [items, setItems] = useState<IntraDayData[]>([])
  const [error, setError] = useState('')

  useEffect(() => {
    fetchData()
      .then((data: IntraDayData[]) => setItems(data))
      .catch(() => setError('Error fetching data'))
  }, [])

  return { items, error, setItems }
}
