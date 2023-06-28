import { Args, Float, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ProductsService } from './products.service';
import { Product } from './products.model';

const config = {
  defaultPageLimit: 10,
  defaultPage: 1,
};

@Resolver()
export class ProductResolver {
  constructor(private readonly productsService: ProductsService) {
  }

  @Query(() => Number, { name: 'count' })
  async getCount(
    @Args({ name: 'categories', type: () => [String], defaultValue: [] }) categories?: string[],
  ) {
    return this.productsService.getCount({ categories });
  }

  @Query(() => [Product], { name: 'products' })
  async getProducts(
    @Args({ name: 'page', type: () => Int, defaultValue: config.defaultPage }) page: number,
    @Args({ name: 'limit', type: () => Int, defaultValue: config.defaultPageLimit }) limit: number,
    @Args({ name: 'categories', type: () => [String], defaultValue: [] }) categories?: string[],
  ) {
    return this.productsService.getProducts({ page, limit, categories });
  }

  @Query(() => Product, { name: 'product' })
  async getProduct(
    @Args({ name: 'id', type: () => String }) id: string,
  ) {
    return this.productsService.getProductById(id);
  }

  @Mutation(() => Product)
  async createProduct(
    @Args({ name: 'name', type: () => String }) name: string,
    @Args({ name: 'description', type: () => String }) description: string,
    @Args({ name: 'price', type: () => Float }) price: number,
    @Args({ name: 'count', type: () => Int }) count: number,
    @Args({ name: 'categories', type: () => [String], nullable: true }) categories?: string[],
  ) {
    return this.productsService.createProduct({ name, count, price, description, categories });
  }
}
