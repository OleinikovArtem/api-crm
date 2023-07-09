import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/database/prisma.module';

import { OrdersService } from './orders.service';
import { OrdersRepository } from './orders.repository';
import { OrdersResolver } from './orders.resolver';

@Module({
  imports: [PrismaModule],
  providers: [OrdersRepository, OrdersService, OrdersResolver],
  exports: [OrdersService]
})
export class OrdersModule {}
