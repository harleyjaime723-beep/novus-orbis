import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const users = [
      { id: 1, email: 'admin@novusorbistech.com', name: 'Admin', role: 'admin', createdAt: new Date() }
    ]
    return NextResponse.json(users)
  } catch (error) {
    return NextResponse.json({ error: 'Erro' }, { status: 500 })
  }
}