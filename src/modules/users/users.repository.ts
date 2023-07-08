import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class UsersRepository {
  constructor(private prisma: PrismaService) {
  }

  async findOne({ email, id }: Prisma.UserWhereUniqueInput) {
    if (!email && !id) return null
    const where = {} as Record<string, string>

    if (id) {
      where.id = id
    } else if (email) {
      where.email = email
    }

    return this.prisma.user.findUnique({ where })
  }

  async create(data: Prisma.UserCreateInput) {
    return this.prisma.user.create({ data })
  }
}
