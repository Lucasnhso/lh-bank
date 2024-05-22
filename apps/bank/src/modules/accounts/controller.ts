import { FastifyReply, FastifyRequest } from "fastify";
import { Account } from "@prisma/client";

import AccountServices from "../accounts/services";

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
