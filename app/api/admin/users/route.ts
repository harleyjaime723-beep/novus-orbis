import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET() {
  try {
    const users = await prisma.user.findMany({
      select: { id: true, email: true, name: true, role: true, createdAt: true }
    })
    return NextResponse.json(users)
  } catch (error) {
    return NextResponse.json({ error: 'Erro ao carregar utilizadores' }, { status: 500 })
  }
}