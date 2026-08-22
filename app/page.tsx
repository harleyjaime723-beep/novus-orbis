'use client'

import { useState, useEffect } from 'react'

export default function Home() {
  const [language, setLanguage] = useState('pt')
  const [langDropdownOpen, setLangDropdownOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [autoScroll, setAutoScroll] = useState(true)

    useEffect(() => {
    setMounted(true)
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // TODAS AS 10 TRADUÇÕES
  const translations = {
    pt: {
      title: 'Novus Orbis Tech',
      subtitle: 'Soluções Digitais de Próxima Geração',
      description: 'Desenvolvemos plataformas inovadoras em Oil & Gas, HVAC, Energias Renováveis e IA Industrial',
      cta: 'Explorar Projetos',
      projetos: 'Nossos Projetos',
      descProjetos: 'Soluções transformadoras que definem o futuro da indústria',
      vetorh: 'Avaliação Longitudinal',
      fluidez: 'Serviços de Combustível',
      nexus: 'IA Industrial',
      energias: 'Energias Renováveis'
    },
    en: {
      title: 'Novus Orbis Tech',
      subtitle: 'Next-Generation Digital Solutions',
      description: 'We develop innovative platforms in Oil & Gas, HVAC, Renewable Energy and Industrial AI',
      cta: 'Explore Projects',
      projetos: 'Our Projects',
      descProjetos: 'Transformative solutions that define the future of industry',
      vetorh: 'Longitudinal Assessment',
      fluidez: 'Fuel Services',
      nexus: 'Industrial AI',
      energias: 'Renewable Energy'
    },
    fr: {
      title: 'Novus Orbis Tech',
      subtitle: 'Solutions Numériques de Nouvelle Génération',
      description: 'Nous développons des plates-formes innovantes en Pétrole & Gaz, HVAC, Énergies Renouvelables et IA Industrielle',
      cta: 'Explorer les Projets',
      projetos: 'Nos Projets',
      descProjetos: 'Des solutions transformatrices qui définissent l\'avenir de l\'industrie',
      vetorh: 'Évaluation Longitudinale',
      fluidez: 'Services de Carburant',
      nexus: 'IA Industrielle',
      energias: 'Énergies Renouvelables'
    },
    es: {
      title: 'Novus Orbis Tech',
      subtitle: 'Soluciones Digitales de Próxima Generación',
      description: 'Desarrollamos plataformas innovadoras en Petróleo y Gas, HVAC, Energías Renovables e IA Industrial',
      cta: 'Explorar Proyectos',
      projetos: 'Nuestros Proyectos',
      descProjetos: 'Soluciones transformadoras que definen el futuro de la industria',
      vetorh: 'Evaluación Longitudinal',
      fluidez: 'Servicios de Combustible',
      nexus: 'IA Industrial',
      energias: 'Energías Renovables'
    },
    de: {
      title: 'Novus Orbis Tech',
      subtitle: 'Digitale Lösungen der Nächsten Generation',
      description: 'Wir entwickeln innovative Plattformen in Öl & Gas, HVAC, Erneuerbare Energien und industrielle KI',
      cta: 'Projekte Erkunden',
      projetos: 'Unsere Projekte',
      descProjetos: 'Transformative Lösungen, die die Zukunft der Industrie prägen',
      vetorh: 'Longitudinale Bewertung',
      fluidez: 'Kraftstoffdienste',
      nexus: 'Industrielle KI',
      energias: 'Erneuerbare Energien'
    },
    zh: {
      title: 'Novus Orbis Tech',
      subtitle: '下一代数字解决方案',
      description: '我们在石油天然气、暖通空调、可再生能源和工业人工智能领域开发创新平台',
      cta: '浏览项目',
      projetos: '我们的项目',
      descProjetos: '定义行业未来的变革性解决方案',
      vetorh: '纵向评估',
      fluidez: '燃料服务',
      nexus: '工业人工智能',
      energias: '可再生能源'
    },
    it: {
      title: 'Novus Orbis Tech',
      subtitle: 'Soluzioni Digitali di Nuova Generazione',
      description: 'Sviluppiamo piattaforme innovative in Petrolio e Gas, HVAC, Energie Rinnovabili e IA Industriale',
      cta: 'Esplora Progetti',
      projetos: 'I Nostri Progetti',
      descProjetos: 'Soluzioni trasformative che definiscono il futuro dell\'industria',
      vetorh: 'Valutazione Longitudinale',
      fluidez: 'Servizi di Carburante',
      nexus: 'IA Industriale',
      energias: 'Energie Rinnovabili'
    },
    ru: {
      title: 'Novus Orbis Tech',
      subtitle: 'Цифровые решения нового поколения',
      description: 'Мы разрабатываем инновационные платформы в нефтегазе, HVAC, возобновляемых источниках энергии и промышленном ИИ',
      cta: 'Изучить Проекты',
      projetos: 'Наши Проекты',
      descProjetos: 'Трансформационные решения, определяющие будущее индустрии',
      vetorh: 'Продольная Оценка',
      fluidez: 'Топливные Услуги',
      nexus: 'Промышленный ИИ',
      energias: 'Возобновляемая Энергия'
    },
    ar: {
      title: 'Novus Orbis Tech',
      subtitle: 'حلول رقمية من الجيل القادم',
      description: 'نحن نطور منصات مبتكرة في النفط والغاز والتدفئة والتهوية وتكييف الهواء والطاقة المتجددة والذكاء الاصطناعي الصناعي',
      cta: 'استكشاف المشاريع',
      projetos: 'مشاريعنا',
      descProjetos: 'حلول تحويلية تحدد مستقبل الصناعة',
      vetorh: 'التقييم الطولي',
      fluidez: 'خدمات الوقود',
      nexus: 'الذكاء الاصطناعي الصناعي',
      energias: 'الطاقة المتجددة'
    },
    ja: {
      title: 'Novus Orbis Tech',
      subtitle: '次世代のデジタルソリューション',
      description: '石油ガス、HVAC、再生可能エネルギー、産業用AIの革新的なプラットフォームを開発します',
      cta: 'プロジェクトを探索',
      projetos: '私たちのプロジェクト',
      descProjetos: '業界の未来を定義する革新的なソリューション',
      vetorh: '縦断的評価',
      fluidez: '燃料サービス',
      nexus: '産業用AI',
      energias: '再生可能エネルギー'
    }
  } as const

  type Language = keyof typeof translations
  const t = translations[language as Language]

  const languages = [
    { code: 'pt', name: 'Português' },
    { code: 'en', name: 'English' },
    { code: 'fr', name: 'Français' },
    { code: 'es', name: 'Español' },
    { code: 'de', name: 'Deutsch' },
    { code: 'zh', name: '中文' },
    { code: 'it', name: 'Italiano' },
    { code: 'ru', name: 'Русский' },
    { code: 'ar', name: 'العربية' },
    { code: 'ja', name: '日本語' }
  ]

      const projects = [
    { 
      id: 1, 
      name: 'VETORH', 
      desc: t.vetorh, 
      icon: '🎯',
      number: '01',
      image: '/projects/vetorh.jpeg'
    },
    { 
      id: 2, 
      name: 'FluiX', 
      desc: t.fluidez, 
      icon: '⛽',
      number: '02',
      image: '/projects/fluidez.jpeg'
    },
    { 
      id: 3, 
      name: 'NEXUS AI', 
      desc: t.nexus, 
      icon: '🤖',
      number: '03',
      image: '/projects/nexus.jpeg'
    },
    { 
      id: 4, 
      name: 'Energias', 
      desc: t.energias, 
      icon: '⚡',
      number: '04',
      image: '/projects/energias.jpeg'
    }
  ]

  if (!mounted) return null

  return (
    <div className="bg-slate-950 min-h-screen">
      {/* Navigation - STICKY */}
      <nav className="fixed top-0 left-0 right-0 bg-slate-950/80 backdrop-blur-xl border-b border-cyan-500/20 z-50">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">◈</span>
            </div>
            <h1 className="text-lg font-semibold text-white hidden sm:block">Novus</h1>
          </div>

          {/* Language Selector - DROPDOWN MODERNO */}
          <div className="relative">
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-cyan-300 border border-cyan-500/50 hover:border-cyan-400 hover:bg-cyan-500/10 transition"
            >
              {language.toUpperCase()}
              <span className={`text-xs transition-transform duration-300 ${langDropdownOpen ? 'rotate-180' : ''}`}>▼</span>
            </button>

            {langDropdownOpen && (
              <>
                <div className="absolute right-0 mt-3 w-52 bg-slate-900/95 backdrop-blur-xl border border-cyan-500/40 rounded-xl shadow-2xl z-50 overflow-hidden animate-in fade-in slide-in-from-top-2">
                  <div className="grid grid-cols-2 gap-1 p-3 max-h-80 overflow-y-auto">
                    {languages.map(lang => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code as Language)
                          setLangDropdownOpen(false)
                        }}
                        className={`px-3 py-2.5 text-sm rounded-lg font-medium transition-all duration-200 ${
                          language === lang.code
                            ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/50'
                            : 'text-gray-300 hover:text-white hover:bg-slate-800'
                        }`}
                      >
                        {lang.name}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="fixed inset-0 z-40" onClick={() => setLangDropdownOpen(false)} />
              </>
            )}
          </div>
        </div>
      </nav>

      {/* HERO - INSPIRADO EM FRAMER + LUSION */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 pb-20 overflow-hidden px-4 sm:px-6">
        {/* Background avec Blur et Gradients */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-cyan-600 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600 rounded-full blur-3xl" />
        </div>

        {/* Video Background */}
        <div className="absolute inset-0 opacity-10">
          <video
            autoPlay
            muted
            loop
            className="w-full h-full object-cover"
          >
            <source src="https://videos.pexels.com/video-files/5910846/5910846-hd_1920_1080_24fps.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          {/* Subtitle */}
          <div className="mb-8 inline-block">
            <p className="text-cyan-400 font-semibold text-sm tracking-widest uppercase">
              Inovação Digital
            </p>
          </div>

          {/* Título MUITO Grande */}
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold text-white mb-8 leading-tight tracking-tight">
            {t.title}
          </h1>

          {/* Subtitle */}
          <p className="text-2xl sm:text-3xl md:text-4xl text-cyan-400 font-light mb-8">
            {t.subtitle}
          </p>

          {/* Description */}
          <p className="text-base sm:text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            {t.description}
          </p>

         {/* CTA - Button Moderno */}
<a href="/projetos" className="group relative px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/50 hover:scale-105 active:scale-95 text-base sm:text-lg inline-block">
  {t.cta}
  <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
</a>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <p className="text-xs text-gray-500 uppercase tracking-widest">Scroll</p>
          <div className="w-1 h-6 border border-gray-500 rounded-full" />
        </div>
      </div>
      </section>

                    {/* PROJECTS CAROUSEL - HORIZONTAL FLASH CARDS */}
      <section className="relative py-32 px-4 sm:px-6 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-16">
            <div className="mb-4">
              <p className="text-cyan-400 font-semibold text-sm tracking-widest uppercase">
                Portfólio
              </p>
            </div>
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6">
              {t.projetos}
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-2xl">
              {t.descProjetos}
            </p>
            <p className="text-sm text-cyan-400 mt-6">👉 Deslize ou use as setas (Hover para ver vídeos) →</p>
          </div>

          {/* Carousel Container */}
          <div className="relative group">
           <div 
  className="overflow-x-auto scrollbar-hide scroll-smooth flex gap-8"
  id="projectsCarousel"
>
              {projects.map((project) => (
  <div key={`${project.id}`} className="flex-shrink-0 w-full sm:w-[28rem] snap-center group/card perspective">
    <div className="relative h-96 rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/50 transform hover:scale-105 hover:-rotate-1 active:scale-95">
      
      {/* Card Background - Preto Sólido */}
      <div className="absolute inset-0 bg-black opacity-85 group-hover/card:opacity-100 transition-all duration-500" />

                    {/* Card Background com Gradient */}
                    <div className="absolute inset-0 bg-black opacity-85 group-hover/card:opacity-100 transition-all duration-500" />

                    {/* Animated Light Effect */}
                    <div className="absolute inset-0 opacity-0 group-hover/card:opacity-30 transition-opacity duration-500">
                      <div className="absolute -top-1/2 -right-1/2 w-96 h-96 bg-white rounded-full blur-3xl" />
                    </div>

                    {/* Content */}
                    <div className="relative z-10 h-full flex flex-col justify-between p-8 sm:p-10">
                      
                      {/* Top - Number */}
                      <div className="flex justify-between items-start">
                        <span className="text-7xl font-black text-white/20 group-hover/card:text-white/40 transition-colors">
                          {project.number}
                        </span>
                        <span className="text-5xl transform group-hover/card:scale-125 group-hover/card:rotate-12 transition-transform duration-300">
                          {project.icon}
                        </span>
                      </div>

                      {/* Bottom - Info */}
                      <div>
                        <h3 className="text-3xl sm:text-4xl font-black text-white mb-3 group-hover/card:text-cyan-100 transition-colors">
                          {project.name}
                        </h3>
                        <p className="text-sm sm:text-base text-gray-200 group-hover/card:text-white transition-colors mb-6 font-medium">
                          {project.desc}
                        </p>
                        <div className="flex items-center gap-2 text-white font-semibold text-sm opacity-0 group-hover/card:opacity-100 transition-all duration-300 transform translate-y-2 group-hover/card:translate-y-0">
                          <span>Explorar</span>
                          <span className="transform group-hover/card:translate-x-2 transition-transform">→</span>
                        </div>
                      </div>

                      {/* Image Overlay - Aparece ao Hover */}
                      {project.image && (
                        <div className="absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 flex items-center justify-center rounded-3xl overflow-hidden z-20">
                          <img
                            src={project.image}
                            alt={project.name}
                            className="w-full h-full object-cover group-hover/card:scale-110 transition-transform duration-700"
                          />
                          {/* Gradient overlay para melhor legibilidade */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                        </div>
                      )}
                    </div>

                    {/* Border Animated */}
                    <div className="absolute inset-0 border-2 border-white/0 group-hover/card:border-white/30 rounded-3xl transition-all duration-500" />
                  </div>
                </div>
              ))}
            </div>

            {/* Left Arrow Button */}
            <button
              onClick={() => {
                const carousel = document.getElementById('projectsCarousel')
                if (carousel) carousel.scrollLeft -= 350
              }}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 z-30 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white hover:shadow-lg hover:shadow-cyan-500/50 transition-all opacity-0 group-hover:opacity-100"
            >
              ←
            </button>

            {/* Right Arrow Button */}
            <button
              onClick={() => {
                const carousel = document.getElementById('projectsCarousel')
                if (carousel) carousel.scrollLeft += 350
              }}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 z-30 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white hover:shadow-lg hover:shadow-cyan-500/50 transition-all opacity-0 group-hover:opacity-100"
            >
              →
            </button>

            {/* Gradient Fade Left */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-950 to-transparent z-20 pointer-events-none" />
            
            {/* Gradient Fade Right */}
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-950 to-transparent z-20 pointer-events-none" />
          </div>
        </div>

        {/* CSS for scrollbar hide */}
        <style jsx>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>
      </section>

            {/* VIDEO SECTION - AUTO PLAY ON SCROLL */}
      <section className="relative py-32 px-4 sm:px-6 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <p className="text-cyan-400 font-semibold text-sm tracking-widest uppercase mb-4">
              Tecnologia
            </p>
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6">
              Inovação em Ação
            </h2>
            <p className="text-lg text-gray-400">
              Explore a tecnologia que move a indústria
            </p>
          </div>

          {/* Videos Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Video 1 - Energias Renováveis */}
            <div className="group relative rounded-2xl overflow-hidden aspect-video bg-slate-800 shadow-2xl shadow-cyan-500/20 hover:shadow-cyan-500/50 transition-shadow">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <h3 className="text-2xl font-bold text-white">Energias Renováveis</h3>
              </div>
            </div>

            {/* Video 2 - Oil & Gas */}
            <div className="group relative rounded-2xl overflow-hidden aspect-video bg-slate-800 shadow-2xl shadow-cyan-500/20 hover:shadow-cyan-500/50 transition-shadow">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <h3 className="text-2xl font-bold text-white">Oil & Gas Solutions</h3>
              </div>
            </div>

            {/* Video 3 - HVAC */}
            <div className="group relative rounded-2xl overflow-hidden aspect-video bg-slate-800 shadow-2xl shadow-cyan-500/20 hover:shadow-cyan-500/50 transition-shadow">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <h3 className="text-2xl font-bold text-white">HVAC Systems</h3>
              </div>
            </div>

            {/* Video 4 - Industrial AI */}
            <div className="group relative rounded-2xl overflow-hidden aspect-video bg-slate-800 shadow-2xl shadow-cyan-500/20 hover:shadow-cyan-500/50 transition-shadow">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <h3 className="text-2xl font-bold text-white">Industrial AI</h3>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-900 border-t border-cyan-500/20 py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h4 className="text-white font-semibold mb-4">Empresa</h4>
              <p className="text-gray-400 text-sm">Novus Orbis Tech, Lda.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Contacto</h4>
              <p className="text-gray-400 text-sm">hello@novusorbis.tech</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Redes</h4>
              <p className="text-gray-400 text-sm">LinkedIn • Twitter • Instagram</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <p className="text-gray-400 text-sm">Privacidade • Termos</p>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
            <p>© 2024 Novus Orbis Tech. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}