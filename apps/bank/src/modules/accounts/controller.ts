import { FastifyReply, FastifyRequest } from "fastify";

import AccountServices from "../accounts/services";
import { Account } from "@prisma/client";

async function create(request: FastifyRequest<{Body: Account}>, reply: FastifyReply) {
  const data = request.body;

  const created = await AccountServices.create(data);

  return reply.status(201).send(created);
}

async function findById(request: FastifyRequest<{Params: {id: string}}>, reply: FastifyReply) {
  const { id } = request.params;

  const account = await AccountServices.findById(id);

  return reply.status(200).send(account);
}

export default {
  create,
  findById
};
