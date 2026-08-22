import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  try {
    // Criar admin
    await prisma.user.create({
      data: {
        email: 'admin@novusorbistech.com',
        password: 'Novus2024!',
        name: 'Admin',
        role: 'admin'
      }
    }).catch(() => {})

    // Criar projetos
    const projectsToCreate = [
      {
        name: 'VETORH',
        slug: 'vetorh',
        category: 'Software',
        description: 'O VETORH é uma plataforma de avaliação longitudinal',
        shortDesc: 'Avaliação Longitudinal Inovadora',
        fullDesc: 'Plataforma completa de avaliação',
        image: 'vetorh.jpeg',
        url: 'https://veto-people-flow.base44.app/',
        team: 'Novus Orbis',
        areas: 'Recursos Humanos, Ciência e Educação, Tecnologia',
        features: '["Metodologia PLAF", "FIT ENGINE", "IA"]',
        technologies: '["React", "Node.js", "AI", "Machine Learning"]'
      },
      {
        name: 'FluiX',
        slug: 'fluidez',
        category: 'Software',
        description: 'Plataforma que digitaliza todos os serviços',
        shortDesc: 'Digitalização de Serviços de Combustível',
        fullDesc: '5 serviços integrados completos',
        image: 'fluidez.jpeg',
        url: 'https://fluidez-fuel-flow.base44.app/',
        team: 'Novus Orbis',
        areas: 'Oil&Gas, Downstream, Service on-demand',
        features: '["Google maps", "Booking services", "Delivery"]',
        technologies: '["React Native", "Firebase", "Cloud", "IoT"]'
      },
      {
        name: 'NEXUS AI',
        slug: 'nexus-ai',
        category: 'IA',
        description: 'A NEXUS é uma plataforma de análise industrial',
        shortDesc: 'IA Industrial para Oil & Gas',
        fullDesc: 'Plataforma com sensores e IA',
        image: 'nexus.jpeg',
        url: null,
        team: 'Novus Orbis',
        areas: 'Oil&Gas, Mineira, Energias Renováveis, HVAC',
        features: '["PLC", "SCADA", "Machine Learning", "IoT"]',
        technologies: '["Python", "TensorFlow", "IoT", "SCADA", "Cloud"]'
      },
      {
        name: 'Energias Renováveis',
        slug: 'energias',
        category: 'Energia',
        description: 'Projeto de Energias Renováveis em Angola',
        shortDesc: 'Soluções de Energia Sustentável',
        fullDesc: 'Solar, eólica, piezoelétrica, nuclear',
        image: 'energias.jpeg',
        url: null,
        team: 'Novus Orbis',
        areas: 'Fotovoltaica (on-grid), Carregamento EVs',
        features: '["Fotovoltaica", "Eólica", "Termonuclear", "Waste to Energy"]',
        technologies: '["IoT", "AI", "Cloud", "Smart Grid"]'
      }
    ]

    for (const project of projectsToCreate) {
      await prisma.project.create({ data: project }).catch(() => {})
    }

    console.log('✓ Seed data inserted successfully')
  } catch (error) {
    console.error('Erro:', error)
  } finally {
    await prisma.$disconnect()
  }
}

main()