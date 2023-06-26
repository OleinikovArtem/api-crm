import { Args, Float, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ProductsService } from 'src/modules/products/products.service';
import { Product } from 'src/modules/products/products.model';

@Resolver()
export class ApiResolver {
  constructor(private readonly productsService: ProductsService) {
  }

  @Query(() => [Product])
  async getProducts() {
    return this.productsService.getProducts({});
  }

  @Mutation(() => Product)
  async createProduct(
    @Args({ name: 'name', type: () => String }) name: string,
    @Args({ name: 'description', type: () => String }) description: string,
    @Args({ name: 'price', type: () => Float }) price: number,
    @Args({ name: 'count', type: () => Int }) count: number,
  ) {
    return this.productsService.createProduct({ name, count, price, description });
  }
}
