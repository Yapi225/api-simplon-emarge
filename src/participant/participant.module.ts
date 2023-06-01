import { Module } from '@nestjs/common';
import { ParticipantService } from './participant.service';
import { ParticipantController } from './participant.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ParticipantEntity } from './entities/participant.entity';

@Module({
  imports:[TypeOrmModule.forFeature([ParticipantEntity])],
  controllers: [ParticipantController],
  providers: [ParticipantService]
})
export class ParticipantModule {}
