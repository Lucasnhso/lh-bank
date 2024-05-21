import { Account } from "@prisma/client";
import { prismaClient } from "../../database";

export default class AccountRepository {
  static async findMany(): Promise<Account[]> {
    return prismaClient.account.findMany();
  }

  static async findById(id: string): Promise<Account | null> {
    return prismaClient.account.findUnique({ where: { id } });
  }

  static async create(data: Account) {
    return prismaClient.account.create({ data });
  }

  static async update(id: string, data: Partial<Account>): Promise<Account> {
    return prismaClient.account.update({ where: { id }, data });
  }

  static async delete(id: string): Promise<Account> {
    return prismaClient.account.delete({ where: { id } });
  }
}
