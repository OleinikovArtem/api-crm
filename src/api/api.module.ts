import { Module } from '@nestjs/common';
import { ProductsModule } from 'src/modules/products/products.module';
import { ApiResolver } from './api.resolver';

@Module({
  imports: [ProductsModule],
  controllers: [],
  providers: [ApiResolver]
})
export class ApiModule {
}

