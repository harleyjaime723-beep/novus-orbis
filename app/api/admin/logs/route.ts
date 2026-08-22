import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET() {
  try {
    const logs = await prisma.accessLog.findMany({
      orderBy: { createdAt: 'desc' },
      take: 100
    })
    return NextResponse.json(logs)
  } catch (error) {
    return NextResponse.json({ error: 'Erro ao carregar logs' }, { status: 500 })
  }
}