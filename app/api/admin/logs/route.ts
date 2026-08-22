import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const logs = [
      { id: 1, userEmail: 'admin@novusorbistech.com', action: 'Login', details: 'Admin login', createdAt: new Date() }
    ]
    return NextResponse.json(logs)
  } catch (error) {
    return NextResponse.json({ error: 'Erro' }, { status: 500 })
  }
}