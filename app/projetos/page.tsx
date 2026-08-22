'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function ProjetosPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const projectsData = [
    { id: 1, name: 'VETORH', category: 'Software', shortDesc: 'Avaliação Longitudinal', fullDesc: 'Plataforma de avaliação com metodologia PLAF.', image: '/projects/vetorh.jpeg', team: 12, date: '02/02/2026', technologies: ['React', 'Node.js'], slug: 'vetorh' },
    { id: 2, name: 'FluiX', category: 'Software', shortDesc: 'Serviços de Combustível', fullDesc: 'Solução completa de combustível.', image: '/projects/fluidez.jpeg', team: 10, date: '15/01/2026', technologies: ['React Native'], slug: 'fluidez' },
    { id: 3, name: 'NEXUS AI', category: 'IA', shortDesc: 'IA Industrial', fullDesc: 'Plataforma de análise industrial.', image: '/projects/nexus.jpeg', team: 30, date: '2024', technologies: ['Python', 'AI'], slug: 'nexus-ai' },
    { id: 4, name: 'Energias', category: 'Energia', shortDesc: 'Energia Sustentável', fullDesc: 'Soluções de energia renovável.', image: '/projects/energias.jpeg', team: 60, date: '2024', technologies: ['IoT'], slug: 'energias' }
  ]

  const filtered = projectsData.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedCategory === 'all' || p.category === selectedCategory)
  )

  return (
    <div className="bg-slate-950 min-h-screen pt-20">
      <nav className="fixed top-0 left-0 right-0 bg-slate-950/80 backdrop-blur-xl border-b border-cyan-500/20 z-50">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <Link href="/" className="text-white font-bold">Novus</Link>
          <Link href="/" className="text-cyan-400">← Voltar</Link>
        </div>
      </nav>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-7xl font-bold text-white mb-8">Projetos</h1>
          
          <input type="text" placeholder="Pesquisar..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full px-4 py-2 rounded bg-slate-800 text-white mb-8" />
          
          <div className="flex gap-3 mb-8">
            {['all', 'Software', 'Energia', 'IA'].map(cat => (
              <button key={cat} onClick={() => setSelectedCategory(cat)} className={`px-4 py-2 rounded ${selectedCategory === cat ? 'bg-cyan-500 text-black' : 'bg-slate-800 text-white'}`}>
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filtered.map((p) => (
              <a href={`/projetos/${p.slug}`} key={p.id} className="bg-slate-800 rounded-lg overflow-hidden hover:opacity-80 transition block">
                <img src={p.image} alt={p.name} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{p.name}</h3>
                  <p className="text-gray-400 mb-4">{p.shortDesc}</p>
                  <button className="w-full bg-cyan-500 text-black font-bold py-2 rounded">Ver Detalhes →</button>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 py-8 text-center text-gray-500 mt-20">
        <p>© 2024 Novus Orbis Tech</p>
      </footer>
    </div>
  )
}