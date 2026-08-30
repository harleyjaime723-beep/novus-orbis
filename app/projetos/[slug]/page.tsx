'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

export default function ProjectDetailPage() {
  const params = useParams()
  const slug = params.slug as string
  const [visibleItems, setVisibleItems] = useState<number[]>([])

  const projectsData: any = {
    vetorh: {
      name: 'VETORH',
      category: 'Software',
      team: 'Novus Orbis',
      areas: 'Recursos Humanos, Ciência e Educação, Tecnologia',
      description: 'O VETORH é uma plataforma de avaliação longitudinal, onde avaliamos durante longos períodos como 2 a 3 anos, estudantes universitários e profissionais de trabalho, para construirmos um perfil profissional consolidado, baseado em consistência, hábitos e caraterísticas confiáveis do perfil profissional do indivíduo ao invés de momentos.\n\nComo metodologia de avaliação, desenvolvemos o nosso PLAF – PROFESSIONAL LONGITUDINAL ASSESSMENT FRAMEWORK, onde avaliamos um total de 14 índices: Eficiência, Consistência, IAPN, Compostura, Atenção ao detalhe, Área de conhecimento, Melhoria com o tempo, Resiliência, Colaboração, IEI, Trabalho em Equipa, Gestão de Tempo, Velocidade de evolução e Novas Competências.',
      features: ['Metodologia PLAF', 'FIT ENGINE', 'IA'],
      url: 'https://veto-people-flow.base44.app/',
      images: ['vetorh.jpeg', 'vetorh-2.jpeg', 'vetorh-3.jpeg'],
      videos: ['vetorh-demo.mp4']
    },
    fluidez: {
      name: 'FluiX',
      category: 'Software',
      team: 'Novus Orbis',
      areas: 'Oil&Gas, Downstream, Service on-demand',
      description: 'Plataforma que digitaliza todos os serviços prestados pelos postos de abastecimento normais.\n\nPermite reservar um horário específico em um posto específico para abastecer, Abastecimento Prioritário para chegar e abastecer imediatamente, Comprar itens na loja dos Postos de abastecimento e receber na viatura, Solicitar abastecimento móvel onde estiver, e Car wash móvel, lavagem da sua viatura onde estiver.',
      features: ['Google maps', 'Booking services', 'Delivery', 'Comissionamento'],
      url: 'https://fluidez-fuel-flow.base44.app/',
      images: ['fluidez.jpeg', 'fluidez-2.jpeg', 'fluidez-3.jpeg'],
      videos: ['fluidez-demo.mp4']
    },
    'nexus-ai': {
      name: 'NEXUS AI',
      category: 'Sistema integrado',
      team: 'Novus Orbis',
      areas: 'Oil&Gas, Mineira, Energias Renováveis, HVAC, Manutenção Preditiva',
      description: 'A NEXUS é uma plataforma de análise industrial que visa transformar a operação industrial com uso de sensores, instrumentação, e Inteligência Artificial para prever possíveis resultados, analisar processos industriais, verificar possíveis falhas, recomendar melhorias e prevenção.\n\nUsamos sensores de última geração e processos industriais diversos para fornecer dados fiáveis, sendo um sistema que melhora com o tempo através de adições de dados e processos iterativos.',
      features: ['PLC', 'SCADA', 'Machine Learning', 'IoT'],
      url: null,
      images: ['nexus.jpeg', 'nexus-2.jpeg', 'nexus-3.jpeg', 'nexus-4.jpeg'],
      videos: []
    },
    energias: {
      name: 'Energias Renováveis',
      category: 'Engenharia, Energia Sustentável',
      team: 'Novus Orbis',
      areas: 'Fotovoltaica (on-grid), Carregamento EVs',
      description: 'Projeto de Energias Renováveis visa usar energias renováveis disponíveis ou com grande capacidade de implementação em Angola: Eólica, Nuclear, Fotovoltaica (on grid), Piezoelétrica, energia das ondas, Waste to energy, etc.\n\nPrincipal objetivo implementar postos de abastecimento de veículos elétricos nas estradas intra-urbanas e principalmente estradas nacionais.',
      features: ['Fotovoltaica', 'Piezoelétrica', 'Eólica', 'Termonuclear', 'Waste to Energy'],
      url: null,
      images: ['energias.jpeg', 'energias-2.jpeg', 'energias-3.jpeg', 'energias-4.jpeg', 'energias-5.jpeg', 'energias-6.jpeg', 'energias-7.jpeg'],
      videos: []
    }
  }

  const project = projectsData[slug]

  useEffect(() => {
    const handleScroll = () => {
      const items = document.querySelectorAll('[data-item]')
      const newVisible: number[] = []
      
      items.forEach((item: any) => {
        const rect = item.getBoundingClientRect()
        if (rect.top < window.innerHeight * 0.8) {
          newVisible.push(parseInt(item.getAttribute('data-item')))
        }
      })
      
      setVisibleItems(newVisible)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!project) return <div className="bg-slate-950 min-h-screen flex items-center justify-center text-white">Projeto não encontrado</div>

  return (
    <div className="bg-slate-950 min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-slate-950/80 backdrop-blur-xl border-b border-cyan-500/20 z-50">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <Link href="/" className="text-white font-bold">Novus</Link>
          <Link href="/projetos" className="text-cyan-400">← Voltar</Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <span className="text-cyan-400 text-sm uppercase font-semibold">{project.category}</span>
          <h1 className="text-7xl font-bold text-white mt-4 mb-6">{project.name}</h1>
          <p className="text-xl text-gray-300 max-w-3xl leading-relaxed mb-8 whitespace-pre-line">{project.description}</p>
          
          {project.url && (
            <a href={project.url} target="_blank" rel="noopener noreferrer" className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition transform hover:scale-105">
              Ir para Web App →
            </a>
          )}

          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-slate-800 p-6 rounded-lg border border-cyan-500/30">
              <p className="text-gray-500 text-sm uppercase mb-2">Equipa</p>
              <p className="text-white text-lg font-semibold">{project.team}</p>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg border border-cyan-500/30">
              <p className="text-gray-500 text-sm uppercase mb-2">Áreas Principais</p>
              <p className="text-white text-lg font-semibold">{project.areas}</p>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg border border-cyan-500/30">
              <p className="text-gray-500 text-sm uppercase mb-2">Tecnologias</p>
              <div className="flex flex-wrap gap-2">
                {project.features.map((f: string) => (
                  <span key={f} className="bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded text-sm">{f}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

    {/* Scroll Content */}
<section className="py-20 px-4">
  <div className="max-w-7xl mx-auto space-y-16">
    {/* Images */}
    {project.images.map((img: string, idx: number) => (
      <div 
        key={`img-${idx}`}
        data-item={idx}
        className={`transition-all duration-700 flex justify-center ${visibleItems.includes(idx) ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="w-full max-w-2xl">
          <img 
            src={`/projects/${slug}/${img}`} 
            alt={`${project.name} ${idx + 1}`} 
            className="w-full rounded-xl shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/50 transition-shadow" 
          />
        </div>
      </div>
    ))}

    {/* Videos */}
    {project.videos.map((vid: string, idx: number) => (
      <div 
        key={`vid-${idx}`}
        data-item={project.images.length + idx}
        className={`transition-all duration-700 flex justify-center ${visibleItems.includes(project.images.length + idx) ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="w-full max-w-2xl">
          <video 
            autoPlay 
            muted 
            loop 
            className="w-full rounded-xl bg-black shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/50 transition-shadow" 
            playsInline
          >
            <source src={`/projects/${slug}/${vid}`} type="video/mp4" />
          </video>
        </div>
      </div>
    ))}
  </div>
</section>

      {/* Footer */}
      <footer className="bg-slate-900 py-12 text-center text-gray-500 mt-20">
        <p>© 2024 Novus Orbis Tech</p>
      </footer>
    </div>
  )
}