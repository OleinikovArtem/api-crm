import { Field, ArgsType, Int } from '@nestjs/graphql';
import { orderConfig } from '../../../config/oreder.config';

const config = orderConfig()

@ArgsType()
export class GetOrdersArgs {
  @Field(() => Int,{ nullable: true, defaultValue: config.defaultPage })
  page: number

  @Field(() => Int, { nullable: true, defaultValue: config.defaultPageLimit })
  limit: number
}
