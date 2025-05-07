'use client'

import React, { createContext, useContext, useState } from 'react'

const LocaleContext = createContext(undefined)

export function LocaleProvider({ children }) {
  const [isUK, setIsUk] = useState(false)

  const toggleLocale = () => {
    setIsUK((prev) => !prev)
  }

  return (
    <LocaleContext.Provider value={{ isUK, toggleLocale }}>
      {children}
    </LocaleContext.Provider>
  )
}
export function useLocale() {
  const context = useContext(LocaleContext)
  if (!context) {
    throw new Error('setIsUK')
  }
  return context
}
