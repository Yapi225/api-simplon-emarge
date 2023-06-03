import { Module } from '@nestjs/common';

import {ConfigModule} from '@nestjs/config'

import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';

import { AppService } from './app.service';
import { ParticipantModule } from './participant/participant.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal:true
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url:"postgres://nowyswud:lYHFHIahOonLgXc6uK3uRSfmKmn2WJRX@motty.db.elephantsql.com/nowyswud",
      autoLoadEntities: true,
      synchronize: true,
    })
    ,ParticipantModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
