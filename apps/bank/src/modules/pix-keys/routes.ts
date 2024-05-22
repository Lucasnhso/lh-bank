import { FastifyInstance } from "fastify";

import PixKeyController from "./controller";

async function pixKeyRoutes (app: FastifyInstance) {
  app.get('/account/:accountId/pixKeys', PixKeyController.findAll);
  app.post('/account/:accountId/pixKey', PixKeyController.create);
}

export default pixKeyRoutes;
