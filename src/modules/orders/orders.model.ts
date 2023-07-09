import { Field, GraphQLISODateTime, ObjectType, Float } from '@nestjs/graphql';
import { Order as OrderDB, ORDER_STATUS  } from '@prisma/client';

import { User } from 'src/modules/users/user.model';
import { Product } from 'src/modules/products/products.model';

@ObjectType()
export class TotalPrice {
  @Field(() => Float)
  value: number;

  @Field(() => String)
  currency: string;
}

@ObjectType()
export class Order {
  @Field(() => String)
  id: OrderDB['id'];

  @Field(() => GraphQLISODateTime)
  createdAt: OrderDB['createdAt'];

  @Field(() => GraphQLISODateTime)
  updatedAt: OrderDB['updatedAt'];

  @Field(() => User, { nullable: true })
  customer: User | null;

  @Field(() => [Product])
  products: Product[];

  @Field(() => ORDER_STATUS)
  status: OrderDB['status'];

  @Field(() => TotalPrice)
  totalPrice: TotalPrice;
}
