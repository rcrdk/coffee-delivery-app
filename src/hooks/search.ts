import { SearchContext } from '@contexts/SearchContext'
import { useContext } from 'react'

export function useSearch() {
  const context = useContext(SearchContext)

  return context
}
