import { Injectable } from '@nestjs/common';
import { ProductsRepository } from './products.repository';
import { Prisma, Product } from '@prisma/client';
import { CreateProductArgs } from './dto/createProduct.args';
import { GetProductsWithPaginationArgs } from './dto/getProducts.args';
import { PaginationOutput } from '../common/pagination/pagination.types';

@Injectable()
export class ProductsService {
  constructor(private repository: ProductsRepository) {
  }

  async createProduct(params: CreateProductArgs) {
    const { categories, ...data } = params;

    return this.repository.createProduct({
      ...data,
      categories: {
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


  async getProducts(params: GetProductsWithPaginationArgs): Promise<PaginationOutput<Product>> {
    const { page, limit, categories } = params;
    const where: Prisma.ProductWhereInput = {};

    if (categories?.length) {
      where.categories = { some: { OR: categories?.map(category => ({ name: category })) } };
    }

    const itemsReq = this.repository.getProducts({
      skip: (page - 1) * limit,
      take: limit,
      where,
    });
    const totalCountReq = this.repository.getCount({ where });

    const [items, totalCount] = await Promise.all([itemsReq, totalCountReq]);

    return {
      items,
      totalCount: 1,
    };
  }
}
