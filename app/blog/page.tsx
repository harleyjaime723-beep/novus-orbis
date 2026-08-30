'use client'

export default function Blog() {
  const articles = [
    { title: 'O Futuro das Energias Renováveis', date: '15 Ago 2024', category: 'Energia' },
    { title: 'IA e Automação Industrial', date: '10 Ago 2024', category: 'Tecnologia' },
    { title: 'Transformação Digital em 2024', date: '05 Ago 2024', category: 'Negócios' },
    { title: 'Segurança em Sistemas Cloud', date: '01 Ago 2024', category: 'Segurança' },
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
          <p className="text-cyan-400 font-semibold text-sm tracking-widest uppercase mb-4">Blog</p>
          <h1 className="text-6xl sm:text-7xl font-bold text-white mb-6">Artigos & Notícias</h1>
          <p className="text-xl text-gray-400 max-w-2xl">Insights sobre tecnologia, inovação e indústria.</p>
        </div>
      </section>

      {/* Articles */}
      <section className="py-32 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto space-y-8">
          {articles.map((article, idx) => (
            <div key={idx} className="p-8 bg-slate-800/50 border border-cyan-500/20 rounded-2xl hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/20 transition cursor-pointer">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-white">{article.title}</h3>
                <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-xs font-semibold">{article.category}</span>
              </div>
              <p className="text-gray-400 text-sm">{article.date}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-32 px-4 sm:px-6 bg-gradient-to-r from-cyan-500/10 to-blue-600/10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Fique Atualizado</h2>
          <p className="text-gray-300 mb-8">Receba as últimas notícias direto na sua caixa de entrada.</p>
          <div className="flex gap-4">
            <input type="email" placeholder="Seu email..." className="flex-1 px-6 py-3 rounded-lg bg-slate-800 border border-cyan-500/30 text-white placeholder-gray-500 focus:border-cyan-500 outline-none" />
            <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition">
              Subscrever
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}