import { ArgsType } from '@nestjs/graphql';

import { PaginationArgs } from '@pagination/pagination.args';
import { GeneratePaginationOutput } from '@pagination/pagination.output';

import { UserWithoutPassword } from '../user.model';

@ArgsType()
export class GetUsersWithPaginationArgs extends PaginationArgs {
}

export const UsersOutput = GeneratePaginationOutput<UserWithoutPassword>(UserWithoutPassword);
