'use client'

import Link from 'next/link'
import { useState } from 'react'
import { translations, languageNames, availableLanguages, type Language } from '@/lib/translations'

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [language, setLanguage] = useState<Language>('pt')
  const [langDropdownOpen, setLangDropdownOpen] = useState(false)
  
  const t = translations[language]

  return (
    <nav className="fixed top-0 left-0 right-0 bg-slate-950/95 backdrop-blur-lg border-b border-cyan-500/30 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        {/* Container Principal */}
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded flex items-center justify-center">
              <span className="text-white font-bold text-lg">◈</span>
            </div>
            <span className="text-xl font-bold text-white hidden sm:inline">
              Novus Orbis
            </span>
          </Link>

          {/* Menu Desktop */}
          <div className="hidden md:flex gap-8 items-center">
            <Link href="/" className="text-gray-300 hover:text-cyan-400 transition">
              {t.nav.home}
            </Link>
            <Link href="/projetos" className="text-gray-300 hover:text-cyan-400 transition">
              {t.nav.projetos}
            </Link>
            <Link href="/contacto" className="text-gray-300 hover:text-cyan-400 transition">
              {t.nav.contacto}
            </Link>
          </div>

          {/* Seletor de Idiomas + Mobile Menu */}
          <div className="flex items-center gap-4">
            
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded bg-slate-800/50 border border-cyan-500/30 text-gray-300 hover:text-cyan-400 transition"
              >
                <span className="text-sm font-medium">{language.toUpperCase()}</span>
                <span className={`transition-transform ${langDropdownOpen ? 'rotate-180' : ''}`}>▼</span>
              </button>

              {/* Dropdown de Idiomas */}
              {langDropdownOpen && (
                <>
                  <div className="absolute right-0 mt-2 w-48 bg-slate-900 border border-cyan-500/30 rounded-lg shadow-xl z-50 overflow-hidden">
                    <div className="grid grid-cols-2 gap-1 p-2">
                      {availableLanguages.map(lang => (
                        <button
                          key={lang}
                          onClick={() => {
                            setLanguage(lang)
                            setLangDropdownOpen(false)
                          }}
                          className={`px-3 py-2 text-sm rounded transition text-left ${
                            language === lang
                              ? 'bg-gradient-to-r from-cyan-500/40 to-blue-500/40 text-cyan-300 border border-cyan-500/50 font-semibold'
                              : 'text-gray-300 hover:bg-slate-800 hover:text-cyan-400'
                          }`}
                        >
                          {languageNames[lang]}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="fixed inset-0 z-40" onClick={() => setLangDropdownOpen(false)} />
                </>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-300 hover:text-cyan-400 text-2xl"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3 border-t border-cyan-500/20 pt-4">
            <Link 
              href="/" 
              className="block text-gray-300 hover:text-cyan-400 transition py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.nav.home}
            </Link>
            <Link 
              href="/projetos" 
              className="block text-gray-300 hover:text-cyan-400 transition py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.nav.projetos}
            </Link>
            <Link 
              href="/contacto" 
              className="block text-gray-300 hover:text-cyan-400 transition py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.nav.contacto}
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}