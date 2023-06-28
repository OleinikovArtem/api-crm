import { Injectable } from '@nestjs/common';
import { ProductsRepository } from './products.repository';
import { Product } from '@prisma/client';

@Injectable()
export class ProductsService {
  constructor(private repository: ProductsRepository) {}

  async createProduct(params: {
    name: Product['name'],
    description: Product['description'],
    price: Product['price'],
    count: Product['count']
  }) {
    const { name, count, description, price } = params;

    return this.repository.createProduct({ name, count, description, price });
  }

  async getCount(params?: {}) {
    return this.repository.getCount(params);
  }

  async getProducts(params: { page: number, limit: number }) {
    const { page, limit } = params;

    return this.repository.getProducts({ skip: (page - 1) * limit, take: limit });
  }
}
