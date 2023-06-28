import { Module } from '@nestjs/common';
import { ProductsModule } from './modules/products/products.module';

import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { PrismaModule } from './database/prisma.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
    }),
    PrismaModule,
    ProductsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
}
