import { Module } from '@nestjs/common';
import { ProductsModule } from 'src/modules/products/products.module';
import { ApiProductResolver } from './api.product.resolver';

@Module({
  imports: [ProductsModule],
  controllers: [],
  providers: [ApiProductResolver]
})
export class ApiModule {}

