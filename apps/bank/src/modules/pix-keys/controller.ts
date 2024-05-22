import { FastifyReply, FastifyRequest } from "fastify";

import PixKeyServices from "./services";
import { CreatePixKeyDto } from "./dto";

async function create(request: FastifyRequest<{Body: CreatePixKeyDto, Params: {accountId: string}}>, reply: FastifyReply) {
  const {
    body: data,
    params: { accountId }
  } = request;

  const created = await PixKeyServices.create(accountId, data);

  return reply.status(201).send(created);
};

async function findAll(request: FastifyRequest<{Params: {accountId: string}}>, reply: FastifyReply) {
  const pixKeys = await PixKeyServices.findByAccountId(request.params.accountId);
  return reply.status(200).send(pixKeys);
}

export default {
  create,
  findAll
};
