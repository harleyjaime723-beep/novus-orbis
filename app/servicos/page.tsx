'use client'

export default function Servicos() {
  const services = [
    { title: 'Software Development', desc: 'Plataformas customizadas para seu negócio', icon: '💻' },
    { title: 'Industrial AI', desc: 'Inteligência Artificial para automação', icon: '🤖' },
    { title: 'Energias Renováveis', desc: 'Soluções sustentáveis e eco-friendly', icon: '⚡' },
    { title: 'HVAC Systems', desc: 'Sistemas de climatização inteligentes', icon: '❄️' },
    { title: 'Oil & Gas Solutions', desc: 'Tecnologia para setor energético', icon: '🛢️' },
    { title: 'Consultoria', desc: 'Assessoria técnica especializada', icon: '📊' },
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
          <p className="text-cyan-400 font-semibold text-sm tracking-widest uppercase mb-4">Serviços</p>
          <h1 className="text-6xl sm:text-7xl font-bold text-white mb-6">O Que Oferecemos</h1>
          <p className="text-xl text-gray-400 max-w-2xl">Soluções tecnológicas completas para transformar seu negócio.</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="p-8 bg-slate-800/50 border border-cyan-500/20 rounded-2xl hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/20 transition">
                <span className="text-5xl mb-4 block">{service.icon}</span>
                <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-4 sm:px-6 bg-gradient-to-r from-cyan-500/10 to-blue-600/10">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-white mb-6">Interessado? Fale Connosco!</h2>
          <a href="/contacto" className="inline-block px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-cyan-500/50 transition">
            Solicitar Orçamento
          </a>
        </div>
      </section>
    </div>
  )
}