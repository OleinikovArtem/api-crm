import { Module } from '@nestjs/common';
import { ProductsRepository } from './products.repository';
import { PrismaModule } from 'src/database/prisma.module';
import { ProductsService } from './products.service';

@Module({
  imports: [PrismaModule],
  providers: [ProductsRepository, ProductsService],
  exports: [ProductsService]
})
export class ProductsModule {}
