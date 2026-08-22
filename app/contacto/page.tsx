'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function ContactoPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <div className="bg-slate-950 min-h-screen">
      <nav className="fixed top-0 left-0 right-0 bg-slate-950/80 backdrop-blur-xl border-b border-cyan-500/20 z-50">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between">
          <Link href="/" className="text-white font-bold">Novus</Link>
          <Link href="/" className="text-cyan-400">Voltar</Link>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-7xl font-bold text-white mb-6">Contacte-nos</h1>
          <p className="text-2xl text-cyan-400">Estamos aqui para ajudar</p>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          <div>
            <h2 className="text-4xl font-bold text-white mb-8">Envie uma Mensagem</h2>
            
            {submitted && (
              <div className="bg-green-500/20 border border-green-500/50 text-green-400 p-4 rounded-xl mb-8">
                Mensagem enviada com sucesso!
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-white font-semibold mb-2">Nome</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-cyan-500/30 text-white"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-cyan-500/30 text-white"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">Mensagem</label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-cyan-500/30 text-white"
                  placeholder="Sua mensagem..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold py-3 rounded-lg hover:opacity-90"
              >
                Enviar
              </button>
            </form>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-white mb-8">Informações</h2>
            
            <div className="space-y-6">
              <div className="bg-slate-800/50 border border-cyan-500/30 rounded-xl p-6">
                <p className="text-gray-500 text-sm uppercase mb-2">Email</p>
                <a href="mailto:novusorbistechlda@gmail.com" className="text-cyan-400 hover:text-cyan-300 font-semibold">
                  novusorbistechlda@gmail.com
                </a>
              </div>

              <div className="bg-slate-800/50 border border-cyan-500/30 rounded-xl p-6">
                <p className="text-gray-500 text-sm uppercase mb-2">Telefone</p>
                <a href="https://wa.me/244941285890" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 font-semibold">
                  +244 941 285 890
                </a>
              </div>

              <div className="bg-slate-800/50 border border-cyan-500/30 rounded-xl p-6">
                <p className="text-gray-500 text-sm uppercase mb-2">Morada</p>
                <p className="text-white font-semibold">Rua XYAMI Shopping, Vila Flor, Luanda</p>
              </div>

              <div className="bg-slate-800/50 border border-cyan-500/30 rounded-xl p-6">
                <p className="text-gray-500 text-sm uppercase mb-2">Horário</p>
                <p className="text-white font-semibold">Seg-Sex: 08:30-16:30</p>
                <p className="text-white font-semibold">Sáb: 08:00-14:00</p>
              </div>

              <a href="https://www.google.com/maps?q=-8.981955,13.290923" target="_blank" rel="noopener noreferrer" className="block w-full bg-cyan-500 hover:bg-cyan-600 text-black font-bold py-3 rounded-lg text-center">
                Ver Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 py-12 text-center text-gray-500">
        <p>© 2024 Novus Orbis Tech</p>
      </footer>
    </div>
  )
}