import { Module } from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://karahan1:karahan@cluster0.xqacgqt.mongodb.net/vinc?retryWrites=true&w=majority'),
    UsersModule
    ]
})
export class AppModule {}
