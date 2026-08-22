import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Novus Orbis Tech - Soluções Digitais',
  description: 'Desenvolvemos plataformas inovadoras em Oil & Gas, HVAC, Energias Renováveis e IA Industrial',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <body className="bg-slate-950">
        {children}
      </body>
    </html>
  )
}