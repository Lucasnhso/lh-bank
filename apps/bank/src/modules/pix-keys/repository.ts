import { PixKey } from "@prisma/client";
import { prismaClient } from "../../database";
import { CreatePixKeyDto } from "./dto";

export default class AccountRepository {
  static async findByAccountId(accountId: string): Promise<PixKey[] | null> {
    return prismaClient.pixKey.findMany({ where: { accountId } });
  }

  static async findByKey(key: string): Promise<PixKey | null> {
    return prismaClient.pixKey.findUnique({ where: { key } });
  }

  static async createIfNotExists(accountId: string, data: CreatePixKeyDto): Promise<PixKey> {
    const dto = {
      ...data,
      accountId
    }
    return prismaClient.pixKey.upsert({
      where: { key: data.key },
      create: dto,
      update: dto
    });
  }
}
