import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class OrdersRepository {
  constructor(private prisma: PrismaService) {
  }

  async createOrder(data: Prisma.OrderCreateInput) {
    const order = await this.prisma.order.create({
      data,
      include: { products: { include: { product: true } }, billingInfo: true, customer: true },
    });
    console.log(order);
    return order;
  }

  updateOrderById(id: string, data: Prisma.OrderUpdateInput) {
    return this.prisma.order.update({ data, where: { id } });
  }

  getOrderById(id: string) {
    return this.prisma.order.findFirstOrThrow({ where: { id }, include: { products: true } });
  }

  getOrdersByEmail(email: string) {
    return this.prisma.order.findMany({ where: { customer: { email } }, include: { products: true } });
  }

  async getCount(params?: {
    cursor?: Prisma.OrderWhereUniqueInput;
    where?: Prisma.OrderWhereInput;
    orderBy?: Prisma.OrderOrderByWithRelationInput;
  }): Promise<number> {
    return this.prisma.order.count(params);
  }

  getOrders(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.OrderWhereUniqueInput;
    where?: Prisma.OrderWhereInput;
    orderBy?: Prisma.OrderOrderByWithRelationInput;
  }) {
    return this.prisma.order.findMany({
      ...params,
      include: { products: { include: { product: true } }, billingInfo: true, customer: true, _count: true },
    });
  }
}
