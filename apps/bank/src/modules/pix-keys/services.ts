import { PixKey } from "@prisma/client";
import AccountRepository from "../accounts/repository";
import PixKeyRepository from "./repository";

interface CreatePixKeyParams {
  key: string;
  kind: string;
}

async function findPixKeyOnRemote(key: string): Promise<PixKey | null> {
  return null;
}

async function createPixKeyOnRemote(pixKey: CreatePixKeyParams): Promise<CreatePixKeyParams> {
  return pixKey;
}

async function findByAccountId(accountId: string): Promise<PixKey[] | null> {
  return PixKeyRepository.findByAccountId(accountId);
}
async function create(bankAccountId: string, pixKey: CreatePixKeyParams): Promise<PixKey> {
  const bankAccount = await AccountRepository.findById(bankAccountId);

  if (!bankAccount) {
    throw new Error("Bank account not found");
  }

  const remotePixKey = await findPixKeyOnRemote(pixKey.key);

  if (remotePixKey) {
    throw new Error("Pix key already exists on remote service");
  }

  await createPixKeyOnRemote({ ...pixKey });

  const created = await PixKeyRepository.createIfNotExists(bankAccount.id, {
    ...pixKey
  });

  return created
}

export default {
  findByAccountId,
  create
};
