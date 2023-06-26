import { Module } from '@nestjs/common';
import { TweetsModule } from './modules/tweets/tweets.module';
import { ProductsModule } from './modules/products/products.module';

@Module({
  imports: [TweetsModule, ProductsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
