import { createContext, type ReactNode, useState } from 'react'

interface SearchContextType {
  searchOpen: boolean
  onToggleSearch: VoidFunction
  searchQuery: string
  onChangeSearchQuery: (value: string) => void
}

interface SearchContextProviderProps {
  children: ReactNode
}

export const SearchContext = createContext({} as SearchContextType)

export function SearchContextProvider({
  children,
}: SearchContextProviderProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchOpen, setSearchOpen] = useState(false)

  function onToggleSearch() {
    setSearchOpen((prev) => !prev)
  }

  function onChangeSearchQuery(value: string) {
    setSearchQuery(value)

    if (value.length > 0) {
      setSearchOpen(true)
    }
  }

  return (
    <SearchContext.Provider
      value={{
        searchOpen,
        onToggleSearch,
        searchQuery,
        onChangeSearchQuery,
      }}
    >
      {children}
    </SearchContext.Provider>
  )
}
