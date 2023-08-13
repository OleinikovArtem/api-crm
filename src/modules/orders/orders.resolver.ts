import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { OrdersService } from './orders.service';

// models
import { Order } from './models/order.model';
import { GetOrdersWithPaginationArgs, OrderOutput } from './dto/getOrders.args';
import { CreateOrderArgs } from './dto/createOrder.args';

@Resolver()
export class OrdersResolver {
  constructor(private orderService: OrdersService) {
  }

  @Query(() => OrderOutput, { name: 'orders' })
  async getOrders(@Args() args: GetOrdersWithPaginationArgs) {
    return this.orderService.getOrders(args);
  }


  @Mutation(() => Order)
  async createOrder(@Args() args: CreateOrderArgs) {
    return this.orderService.createOrder(args);
  }
}
