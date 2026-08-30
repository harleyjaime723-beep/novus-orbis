'use client'

export default function Equipa() {
  const team = [
    { name: 'Zola', role: 'Fundador & CEO', expertise: 'Engenharia & Negócios' },
    { name: 'Equipa Dev', role: 'Desenvolvimento', expertise: 'Full Stack & Cloud' },
    { name: 'Equipa Design', role: 'Design & UX', expertise: 'Interface & Experiência' },
    { name: 'Equipa Support', role: 'Suporte Técnico', expertise: 'Client Success' },
  ]

  return (
    <div className="bg-slate-950 min-h-screen pt-24">
      {/* Botão de Regresso */}
      <div className="max-w-7xl mx-auto px-6 py-4">
        <a href="/" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition font-semibold">
          ← Voltar
        </a>
      </div>
      {/* Hero */}
      <section className="py-32 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-cyan-400 font-semibold text-sm tracking-widest uppercase mb-4">Equipa</p>
          <h1 className="text-6xl sm:text-7xl font-bold text-white mb-6">Quem Somos</h1>
          <p className="text-xl text-gray-400 max-w-2xl">Um time de profissionais dedicados à excelência e inovação.</p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-32 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, idx) => (
              <div key={idx} className="p-8 bg-slate-800/50 border border-cyan-500/20 rounded-2xl hover:border-cyan-500/50 transition text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-cyan-400 font-semibold mb-2">{member.role}</p>
                <p className="text-gray-400 text-sm">{member.expertise}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-32 px-4 sm:px-6 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-white mb-12 text-center">Nossos Valores</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">🎯 Excelência</h3>
              <p className="text-gray-300">Comprometidos com a qualidade em tudo que fazemos.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">💡 Inovação</h3>
              <p className="text-gray-300">Sempre buscando novas formas de resolver problemas.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">🤝 Integridade</h3>
              <p className="text-gray-300">Honestidade e transparência em todas as relações.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">🚀 Impacto</h3>
              <p className="text-gray-300">Criando soluções que fazem diferença.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}