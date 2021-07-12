import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getRepository } from 'typeorm';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { User } from './entities/user.entity';
import { HttpException } from '@nestjs/common/exceptions/http.exception';
import { HttpStatus } from '@nestjs/common';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>

  ) {}

  async create(dto: CreateUserDto): Promise<CreateUserDto> {
  const {firstName, lastName, email} = dto;
  const qb = await getRepository(User)
  .createQueryBuilder('user')
  .where('user.firstName = :firstName', { firstName })
  .orWhere('user.email = :email', { email })
  .orWhere('user.lasttName = :lasttName', { lastName });

  const user = await qb.getOne();

  if (user) {
    const errors = {username: 'Username and email must be unique.'};
    throw new HttpException({message: 'Input data validation failed', errors}, HttpStatus.BAD_REQUEST);

  }

  // create new user
  let newUser = new User();
  newUser.firstName = firstName;
  newUser.email = email;
  newUser.lastName = lastName;
 


    const savedUser = await this.userRepository.save(newUser);
    return savedUser;
  

}

  async findAll(): Promise<User[]> {
    return await this.userRepository.find()
  }
  

  findOne(id: number) {
    return this.userRepository.findOne(id)
  }
  async updateUser(user: User) {
    this.userRepository.save(user)
}

async deleteUser(user: User) {
    this.userRepository.delete(user);
}

}
