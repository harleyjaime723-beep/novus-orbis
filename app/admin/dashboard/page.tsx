'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function DashboardPage() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState('projects')
  const [projects, setProjects] = useState<any[]>([])
  const [users, setUsers] = useState<any[]>([])
  const [logs, setLogs] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const isLogged = localStorage.getItem('adminLogged')
    if (!isLogged) router.push('/admin/login')
    loadData()
  }, [router])

  const loadData = async () => {
    try {
      const [projectsRes, usersRes, logsRes] = await Promise.all([
        fetch('/api/admin/projects'),
        fetch('/api/admin/users'),
        fetch('/api/admin/logs')
      ])
      
      if (projectsRes.ok) setProjects(await projectsRes.json())
      if (usersRes.ok) setUsers(await usersRes.json())
      if (logsRes.ok) setLogs(await logsRes.json())
    } catch (error) {
      console.error('Erro ao carregar dados:', error)
    }
    setLoading(false)
  }

  const handleLogout = () => {
    localStorage.removeItem('adminLogged')
    router.push('/admin/login')
  }

  return (
    <div className="bg-slate-950 min-h-screen">
      {/* Header */}
      <header className="bg-slate-900 border-b border-cyan-500/20 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">🔐 Dashboard Admin</h1>
          <button onClick={handleLogout} className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg">
            Logout
          </button>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="bg-slate-900/50 border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-6 flex gap-8">
          <button
            onClick={() => setActiveTab('projects')}
            className={`py-4 font-semibold border-b-2 transition ${
              activeTab === 'projects'
                ? 'text-cyan-400 border-cyan-500'
                : 'text-gray-400 border-transparent hover:text-white'
            }`}
          >
            📁 Projetos ({projects.length})
          </button>
          <button
            onClick={() => setActiveTab('users')}
            className={`py-4 font-semibold border-b-2 transition ${
              activeTab === 'users'
                ? 'text-cyan-400 border-cyan-500'
                : 'text-gray-400 border-transparent hover:text-white'
            }`}
          >
            👥 Utilizadores ({users.length})
          </button>
          <button
            onClick={() => setActiveTab('logs')}
            className={`py-4 font-semibold border-b-2 transition ${
              activeTab === 'logs'
                ? 'text-cyan-400 border-cyan-500'
                : 'text-gray-400 border-transparent hover:text-white'
            }`}
          >
            📋 Logs
          </button>
        </div>
      </div>

      {/* Content */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          {activeTab === 'projects' && (
            <div>
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-bold text-white">Gerenciar Projetos</h2>
                <Link href="/admin/dashboard/novo-projeto" className="bg-cyan-500 hover:bg-cyan-600 text-black font-bold px-6 py-2 rounded-lg">
                  ➕ Novo Projeto
                </Link>
              </div>

              {loading ? (
                <p className="text-gray-400">Carregando...</p>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {projects.map((project) => (
                    <div key={project.id} className="bg-slate-800 border border-cyan-500/30 rounded-xl p-6 hover:border-cyan-500/50 transition">
                      <h3 className="text-2xl font-bold text-white mb-2">{project.name}</h3>
                      <span className="inline-block bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded text-sm font-semibold mb-4">
                        {project.category}
                      </span>
                      <p className="text-gray-400 mb-6 line-clamp-2">{project.description}</p>
                      <div className="flex gap-3">
                        <Link href={`/admin/dashboard/editar/${project.id}`} className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg text-center transition">
                          ✏️ Editar
                        </Link>
                        <button className="flex-1 bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded-lg transition">
                          🗑️ Deletar
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {activeTab === 'users' && (
            <div>
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-bold text-white">Gerenciar Utilizadores</h2>
                <Link href="/admin/dashboard/novo-user" className="bg-cyan-500 hover:bg-cyan-600 text-black font-bold px-6 py-2 rounded-lg">
                  ➕ Novo Utilizador
                </Link>
              </div>

              {loading ? (
                <p className="text-gray-400">Carregando...</p>
              ) : (
                <div className="bg-slate-800 border border-cyan-500/30 rounded-xl overflow-hidden">
                  <table className="w-full">
                    <thead className="bg-slate-900">
                      <tr>
                        <th className="px-6 py-4 text-left text-white font-semibold">Email</th>
                        <th className="px-6 py-4 text-left text-white font-semibold">Nome</th>
                        <th className="px-6 py-4 text-left text-white font-semibold">Role</th>
                        <th className="px-6 py-4 text-left text-white font-semibold">Acções</th>
                      </tr>
                    </thead>
                    <tbody>
                      {users.map((user) => (
                        <tr key={user.id} className="border-t border-cyan-500/20 hover:bg-slate-900/50 transition">
                          <td className="px-6 py-4 text-white">{user.email}</td>
                          <td className="px-6 py-4 text-gray-400">{user.name}</td>
                          <td className="px-6 py-4">
                            <span className={`px-3 py-1 rounded text-sm font-semibold ${
                              user.role === 'admin' ? 'bg-red-500/20 text-red-400' :
                              user.role === 'editor' ? 'bg-blue-500/20 text-blue-400' :
                              'bg-gray-500/20 text-gray-400'
                            }`}>
                              {user.role}
                            </span>
                          </td>
                          <td className="px-6 py-4 flex gap-2">
                            <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm">Editar</button>
                            <button className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm">Deletar</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}

          {activeTab === 'logs' && (
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">Histórico de Acesso</h2>

              {loading ? (
                <p className="text-gray-400">Carregando...</p>
              ) : (
                <div className="bg-slate-800 border border-cyan-500/30 rounded-xl overflow-hidden">
                  <table className="w-full">
                    <thead className="bg-slate-900">
                      <tr>
                        <th className="px-6 py-4 text-left text-white font-semibold">Utilizador</th>
                        <th className="px-6 py-4 text-left text-white font-semibold">Ação</th>
                        <th className="px-6 py-4 text-left text-white font-semibold">Data/Hora</th>
                        <th className="px-6 py-4 text-left text-white font-semibold">Detalhes</th>
                      </tr>
                    </thead>
                    <tbody>
                      {logs.slice(0, 20).map((log, idx) => (
                        <tr key={idx} className="border-t border-cyan-500/20 hover:bg-slate-900/50 transition">
                          <td className="px-6 py-4 text-white">{log.userEmail}</td>
                          <td className="px-6 py-4 text-cyan-400 font-semibold">{log.action}</td>
                          <td className="px-6 py-4 text-gray-400">{new Date(log.createdAt).toLocaleString('pt-PT')}</td>
                          <td className="px-6 py-4 text-gray-500 text-sm">{log.details}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}