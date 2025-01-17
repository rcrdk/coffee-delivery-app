import { createContext, type ReactNode, useState } from 'react'

interface SearchContextType {
  searchOpen: boolean
  onToggleSearch: VoidFunction
}

interface SearchContextProviderProps {
  children: ReactNode
}

export const SearchContext = createContext({} as SearchContextType)

export function SearchContextProvider({
  children,
}: SearchContextProviderProps) {
  const [searchOpen, setSearchOpen] = useState(false)

  function onToggleSearch() {
    setSearchOpen((prev) => !prev)
  }

  return (
    <SearchContext.Provider
      value={{
        searchOpen,
        onToggleSearch,
      }}
    >
      {children}
    </SearchContext.Provider>
  )
}
