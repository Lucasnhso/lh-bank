import { FastifyInstance } from "fastify";

import accountController from "./controller";

async function accountsRoutes (app: FastifyInstance) {
  app.post('/account', accountController.create);
  app.get('/account/:id', accountController.findById);
}

export default accountsRoutes;
