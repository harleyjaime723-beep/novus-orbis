import { NextRequest, NextResponse } from 'next/server'

export async function GET() {
  try {
    // Dados hardcoded (sem Prisma)
    const projects = [
      { id: 1, name: 'VETORH', category: 'Software', description: 'Plataforma de avaliação', createdAt: new Date() },
      { id: 2, name: 'FluiX', category: 'Software', description: 'Digitalização de serviços', createdAt: new Date() },
      { id: 3, name: 'NEXUS AI', category: 'IA', description: 'Plataforma de análise', createdAt: new Date() },
      { id: 4, name: 'Energias', category: 'Energia', description: 'Energias renováveis', createdAt: new Date() }
    ]
    return NextResponse.json(projects)
  } catch (error) {
    return NextResponse.json({ error: 'Erro ao carregar projetos' }, { status: 500 })
  }
}