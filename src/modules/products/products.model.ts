import { Field, Float, GraphQLISODateTime, Int, ObjectType } from '@nestjs/graphql';
import { Product as ProductDB } from '@prisma/client';

@ObjectType()
export class Product {
  @Field(() => String)
  id: ProductDB['id'];

  @Field(() => GraphQLISODateTime)
  createdAt: ProductDB['createdAt'];

  @Field(() => GraphQLISODateTime)
  updatedAt: ProductDB['updatedAt'];

  @Field(() => String)
  name: ProductDB['name'];

  @Field(() => String)
  description: ProductDB['description'];

  @Field(() => Float)
  price: ProductDB['price'];

  @Field(() => Int)
  count: ProductDB['count'];
}
