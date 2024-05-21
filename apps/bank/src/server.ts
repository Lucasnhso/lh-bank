import Fastify from 'fastify'
import cors from '@fastify/cors'
import accountsRoutes from './modules/accounts/routes'

const port = parseInt(process.env.PORT || "3333");

const app = Fastify({ logger: true })
app.register(cors)

accountsRoutes(app)

app.listen({ port });

