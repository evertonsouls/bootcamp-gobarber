import { v4 as uuid } from 'uuid';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import ICreateUserDTO from '@modules/users/dtos/ICreateUserDTO';
import User from '@modules/users/infra/typeorm/entities/User';

class FakeUsersRepository implements IUsersRepository {
  private users: User[] = [];

  findById(id: string): Promise<User | undefined> {
    const findUser = this.users.find(user => user.id === id);

    return Promise.resolve(findUser);
  }

  public async findByEmail(email: string): Promise<User | undefined> {
    const findUser = this.users.find(user => user.email === email);

    return Promise.resolve(findUser);
  }

  public create({ name, email, password }: ICreateUserDTO): Promise<User> {
    const user = new User();

    Object.assign(user, { id: uuid(), name, email, password });

    this.users.push(user);

    return Promise.resolve(user);
  }

  public save(user: User): Promise<User> {
    const findIndex = this.users.findIndex(findUser => user.id === findUser.id);

    this.users[findIndex] = user;

    return Promise.resolve(user);
  }
}

export default FakeUsersRepository;
