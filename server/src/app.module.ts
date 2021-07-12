import { Module } from '@nestjs/common';
import { ChatsModule } from './chats/chats.module';
import { UsersModule } from './users/users.module';
import { RoomsModule } from './rooms/rooms.module';
import {TypeOrmModule} from '@nestjs/typeorm'
import { Room } from './rooms/entities/room.entity';
import { Message } from './chats/entities/message.entity';
import { AuthModule } from './auth/auth.module';
import { User } from './users/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mariadb',
      host: 'db',
      port: 3306,
      username: 'root',
      password: 'webtech123',
      database: 'dev_profile',
      autoLoadEntities: true,
      entities: [Room,Message,User],
      logger: 'advanced-console',
      // migrationsRun: true,
      synchronize: true,
    })
    
    ,ChatsModule, RoomsModule, AuthModule,UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
