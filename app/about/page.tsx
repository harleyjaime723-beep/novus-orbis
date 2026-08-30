'use client'

export default function About() {
  return (
    <div className="bg-slate-950 min-h-screen pt-24">
      {/* Botão de Regresso */}
      <div className="max-w-7xl mx-auto px-6 py-4">
        <a href="/" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition font-semibold">
          ← Voltar
        </a>
      </div>

      {/* Hero Section */}
      <section className="relative py-32 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <p className="text-cyan-400 font-semibold text-sm tracking-widest uppercase mb-4">
              Sobre Nós
            </p>
            <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold text-white mb-6">
              Novus Orbis Tech
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl">
              Transformando ideias em soluções digitais inovadoras para o futuro.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-32 px-4 sm:px-6 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">🎯 Missão</h3>
              <p className="text-gray-300 leading-relaxed">
                Desenvolver soluções tecnológicas que transformem a forma como as empresas operam e inovam.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">👁️ Visão</h3>
              <p className="text-gray-300 leading-relaxed">
                Ser líder em inovação digital, criando tecnologias que impactam positivamente a sociedade.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">💡 Valores</h3>
              <p className="text-gray-300 leading-relaxed">
                Excelência, inovação, integridade e compromisso com a satisfação do cliente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-32 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-white mb-12">Nossa História</h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Fundada em 2024, a Novus Orbis Tech nasceu da paixão por criar soluções tecnológicas inovadoras e sustentáveis.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Com foco em Oil & Gas, Energias Renováveis, HVAC e Tecnologia, desenvolvemos plataformas que transformam operações industriais e comerciais.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Hoje, somos um time de profissionais dedicados a entregar excelência e inovação.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 sm:px-6 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border-t border-cyan-500/20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-white mb-6">Pronto para Inovar?</h2>
          <a 
            href="/contacto" 
            className="inline-block px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-cyan-500/50 transition"
          >
            Contacte-nos Agora
          </a>
        </div>
      </section>
    </div>
  )
}