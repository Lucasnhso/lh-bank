import Fastify from 'fastify';
import cors from '@fastify/cors';

import accountsRoutes from './modules/accounts/routes'
import pixKeyRoutes from './modules/pix-keys/routes';
const port = parseInt(process.env.PORT || "3333");

const app = Fastify({ logger: true });
app.register(cors);

accountsRoutes(app);
pixKeyRoutes(app);

app.listen({ port });
