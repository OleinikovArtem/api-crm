import { Module } from '@nestjs/common';
import { ProductsRepository } from './products.repository';
import { PrismaModule } from 'src/database/prisma.module';
import { ProductsService } from './products.service';
import { ProductResolver } from './products.resolver';

@Module({
  imports: [PrismaModule],
  providers: [ProductsRepository, ProductsService, ProductResolver],
  exports: [ProductsService]
})
export class ProductsModule {}
