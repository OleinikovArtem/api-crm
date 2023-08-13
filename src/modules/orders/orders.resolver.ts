import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { OrdersService } from './orders.service';

// models
import { Order } from './models/order.model';
import { GetOrdersArgs } from './dto/getOrders.args';
import { CreateOrderArgs } from './dto/createOrder.args';

@Resolver()
export class OrdersResolver {
  constructor(private orderService: OrdersService) {
  }

  @Query(() => [Order], { name: 'orders' })
  async getOrders(@Args() args: GetOrdersArgs) {
    return this.orderService.getOrders(args);
  }


  @Mutation(() => Order)
  async createOrder(@Args() args: CreateOrderArgs) {
    return this.orderService.createOrder(args);
  }
}
