import { Account } from "@prisma/client";
import AccountRepository from "./repository";

async function findById(id: string): Promise<Account | null> {
  const account = await AccountRepository.findById(id);
  return account;
}
async function create(data: Account): Promise<Account> {
  const account = await AccountRepository.create(data);
  return account;
}

async function update(id: string, data: Partial<Account>): Promise<Account> {
  const account = await AccountRepository.update(id, data);
  return account;
}

export default {
  findById,
  create,
  update
};
