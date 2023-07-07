import { Field, GraphQLISODateTime, ObjectType } from '@nestjs/graphql';
import { User as UserDB, ROLE } from '.prisma/client';

@ObjectType()
export class User {
  @Field(() => String)
  id: UserDB['id'];

  @Field(() => GraphQLISODateTime)
  createdAt: UserDB['createdAt'];

  @Field(() => GraphQLISODateTime)
  updatedAt: UserDB['updatedAt'];

  @Field(() => GraphQLISODateTime)
  emailVerified: UserDB['emailVerified'];

  @Field(() => String)
  name: UserDB['name'];

  @Field(() => String)
  email: UserDB['email'];

  @Field(() => String)
  password: UserDB['password'];

  @Field(() => String)
  image: UserDB['image'];

  @Field(() => String)
  phone: UserDB['phone'];

  @Field(() => ROLE)
  role: UserDB['role'];
}
