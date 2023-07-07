import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';

import { UsersModule } from 'src/modules/users/users.module';

@Module({
  providers: [AuthService, AuthResolver, JwtService],
  imports: [UsersModule],
})
export class AuthModule {}
