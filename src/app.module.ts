import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

import { PrismaModule } from './database/prisma.module';
import { MinioClientModule } from './modules/minio-client/minio-client.module';

import { ProductsModule } from './modules/products/products.module';
import { CategoriesModule } from './modules/categories/categories.module';
import { FileUploadModule } from './modules/file-upload/file-upload.module';

import { configurations } from './config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: configurations }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
    }),
    PrismaModule,
    MinioClientModule,
    ProductsModule,
    CategoriesModule,
    FileUploadModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
}
