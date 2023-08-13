import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ProductsService } from './products.service';
import { Product } from './products.model';
import { GetProductsWithPaginationArgs, ProductsOutput } from './dto/getProducts.args';
import { GetProductArgs } from './dto/getProduct.args';
import { CreateProductArgs } from './dto/createProduct.args';

@Resolver()
export class ProductResolver {
  constructor(private readonly productsService: ProductsService) {
  }

  @Query(() => ProductsOutput, { name: 'products' })
  async getProducts(@Args() args: GetProductsWithPaginationArgs) {
    return this.productsService.getProducts(args);
  }

  @Query(() => Product, { name: 'product' })
  async getProduct(@Args() args: GetProductArgs) {
    return this.productsService.getProductById(args.id);
  }

  @Mutation(() => Product)
  async createProduct(@Args() args: CreateProductArgs) {
    return this.productsService.createProduct(args);
  }
}
