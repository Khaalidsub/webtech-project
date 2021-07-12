import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controllers';
import {TypeOrmModule} from '@nestjs/typeorm'
import { User } from './entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
  ],

  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
