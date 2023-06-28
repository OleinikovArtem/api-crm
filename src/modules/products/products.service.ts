import { Injectable } from '@nestjs/common';
import { ProductsRepository } from './products.repository';
import { Prisma, Product } from '@prisma/client';

@Injectable()
export class ProductsService {
  constructor(private repository: ProductsRepository) {
  }

  async createProduct(params: {
    name: Product['name'],
    description: Product['description'],
    price: Product['price'],
    count: Product['count'],
    categories?: string[],
  }) {
    const { name, count, description, price, categories } = params;

    return this.repository.createProduct({
      name, count, description, price, categories: {
        connectOrCreate: categories?.map((category) => {
          return {
            where: { name: category },
            create: { name: category },
          };
        }),
      },
    });
  }

  async getProductById(id: string) {
    return this.repository.getProductById(id);
  }

  async getCount({ categories }: { categories?: string[] } = {}) {
    const where: Prisma.ProductWhereInput = {};
    if (categories?.length) {
      where.categories = this.createCategoryListRelationFilter(categories);
    }

    return this.repository.getCount({ where });
  }

  async getProducts(params: { page: number, limit: number, categories?: string[] }) {
    const { page, limit, categories } = params;
    const where: Prisma.ProductWhereInput = {};

    if (categories?.length) {
      where.categories = this.createCategoryListRelationFilter(categories);
    }

    return this.repository.getProducts({
      skip: (page - 1) * limit,
      take: limit,
      where,
    });
  }

  private createCategoryListRelationFilter(categories: string[]) {
    return { some: { OR: categories?.map(category => ({ name: category })) } };
  }
}
