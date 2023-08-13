import { ArgsType } from '@nestjs/graphql';
import { PaginationArgs } from '@pagination/pagination.args';

import { Order } from '../models/order.model';
import { GeneratePaginationOutput } from '@pagination/pagination.output';

@ArgsType()
export class GetOrdersWithPaginationArgs extends PaginationArgs {
};

export const OrderOutput = GeneratePaginationOutput<Order>(Order);
