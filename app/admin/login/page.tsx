'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (email === 'admin@novusorbistech.com' && password === 'Novus2024!') {
      localStorage.setItem('adminLogged', 'true')
      router.push('/admin/dashboard')
    } else {
      setError('Email ou senha incorretos')
    }
  }

  return (
    <div className="bg-slate-950 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md">
        <div className="bg-slate-800 border border-cyan-500/30 rounded-2xl p-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-2xl">◈</span>
            </div>
            <h1 className="text-3xl font-bold text-white">Admin</h1>
            <p className="text-gray-400 mt-2">Novus Orbis Tech</p>
          </div>

          {error && (
            <div className="bg-red-500/20 border border-red-500/50 text-red-400 p-3 rounded-lg mb-6">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-white font-semibold mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-cyan-500/30 text-white"
                placeholder="admin@novusorbistech.com"
              />
            </div>

            <div>
              <label className="block text-white font-semibold mb-2">Senha</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-cyan-500/30 text-white"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:opacity-90 text-white font-bold py-3 rounded-lg transition"
            >
              Entrar
            </button>
          </form>

          <p className="text-gray-500 text-sm text-center mt-6">
            Para testes: admin@novusorbistech.com / Novus2024!
          </p>
        </div>
      </div>
    </div>
  )
}