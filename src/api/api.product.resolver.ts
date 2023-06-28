import { Args, Float, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ProductsService } from 'src/modules/products/products.service';
import { Product } from 'src/modules/products/products.model';

const config = {
  defaultPageLimit: 10,
  defaultPage: 1,
};

@Resolver()
export class ApiProductResolver {
  constructor(private readonly productsService: ProductsService) {
  }

  @Query(() => [Product], { name: 'products' })
  async getProducts(
    @Args({ name: 'page', type: () => Int, defaultValue: config.defaultPage }) page: number,
    @Args({ name: 'limit', type: () => Int, defaultValue: config.defaultPageLimit }) limit: number,
  ) {
    return this.productsService.getProducts({ page, limit });
  }

  @Query(() => Number, { name: 'count' })
  async getCount() {
    return this.productsService.getCount({});
  }

  @Mutation(() => Product)
  async createProduct(
    @Args({ name: 'name', type: () => String }) name: string,
    @Args({ name: 'description', type: () => String }) description: string,
    @Args({ name: 'price', type: () => Float }) price: number,
    @Args({ name: 'count', type: () => Int }) count: number,

    @Args({ name: 'categories', type: () => [String], nullable: true }) categories?: string[],
  ) {
    console.log({ categories });
    return this.productsService.createProduct({ name, count, price, description, categories });
  }
}
