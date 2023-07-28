import { Injectable, NotFoundException } from '@nestjs/common';
import { OrdersRepository } from './orders.repository';
import { Prisma } from '@prisma/client';
import { CreateOrderArgs } from './dto/createOrder.args';
import { ProductsService } from '../products/products.service';

@Injectable()
export class OrdersService {
  constructor(
    private repository: OrdersRepository,
    private productsService: ProductsService
  ) {
  }

  async createOrder(params: CreateOrderArgs) {
    for (const productInput of params.products) {
      const product = await this.productsService.getProductById(productInput.productId);

      if (!product) {
        throw new NotFoundException(`Product with ID ${productInput.productId} not found.`);
      }
    }

    return this.repository.createOrder({
      code: Number((Math.random() * 10000).toFixed()),
      billingInfo: { create: params.billingInfo },
      products: {
        create: params.products.map((product) => ({
          product: { connect: { id: product.productId} },
          count: product.count,
        })),
      },
      status: 'CREATED',
    });
  }

  async getOrders(params: { page: number, limit: number }) {
    const { page, limit } = params;
    const where: Prisma.OrderWhereInput = {
    };

    return this.repository.getOrders({
      skip: (page - 1) * limit,
      take: limit,
    })
  }
}
