import { Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import * as bcryptjs from 'bcryptjs';

@Injectable()
export class UsersService {
  constructor(private repository: UsersRepository) {
  }

  async findByEmail(email: string) {
    return this.repository.findOne({ email });
  }

  async createUser(inputData: { email: string, password: string, name: string }) {
    const password = await this.hashPassword(inputData.password);
    const data = { ...inputData, password };

    return this.repository.create(data);
  }

  async comparePassword(hash?: string, password?: string): Promise<boolean> {
    if (!password || !hash) return false;
    return bcryptjs.compareSync(password, hash);
  }

  async makeAdmin(email: string) {
    return this.repository.update(email, { role: 'ADMIN' });
  }

  private async hashPassword(password: string): Promise<string> {
    const salt = bcryptjs.genSaltSync(10);
    return bcryptjs.hashSync(password, salt);
  }
}
