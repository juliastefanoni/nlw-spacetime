import { FastifyInstance } from 'fastify'
import { prisma } from '../lib/prisma'

export async function memoriesRoutes(app: FastifyInstance) {
  app.get('/hello', async () => {
    const users = await prisma.user.findMany()
    return users
  })
}
