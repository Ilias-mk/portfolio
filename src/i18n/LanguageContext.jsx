import { createContext, useContext, useEffect, useState } from 'react'
import { translations } from './translations.js'

const STORAGE_KEY = 'preferred-language'
const SUPPORTED = ['en', 'sv']

const LanguageContext = createContext(null)

function getInitialLanguage() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (SUPPORTED.includes(saved)) return saved
  } catch {
    // Storage can be unavailable (private mode). Fall through to the browser language.
  }
  return navigator.language?.toLowerCase().startsWith('sv') ? 'sv' : 'en'
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(getInitialLanguage)

  useEffect(() => {
    document.documentElement.lang = language
    try {
      localStorage.setItem(STORAGE_KEY, language)
    } catch {
      // Ignore: the choice just won't be remembered.
    }
  }, [language])

  const value = { language, setLanguage, t: translations[language] }
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('useLanguage must be used inside LanguageProvider')
  return context
}
