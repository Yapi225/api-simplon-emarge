import { Injectable } from '@nestjs/common';
import { ParticipantDto } from './dto/participant.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ParticipantEntity } from './entities/participant.entity';

@Injectable()
export class ParticipantService {
  constructor(
    @InjectRepository(ParticipantEntity)
    private readonly participantRepository: Repository<ParticipantEntity>,
  ) {}
  async create(participant: ParticipantDto): Promise<ParticipantEntity> {
    try {
      const respo = await this.participantRepository.save(participant);
      return respo;
    } catch (error) {
      console.error('Save participant service err > ', error);
    }
  }

  async findAll(): Promise<ParticipantEntity[]> {
    try {
      const respo = await this.participantRepository.find();
      return respo;
    } catch (error) {
      console.error('Get All participants err > ', error);
    }
  }

  async findOne(idParticipant: string) {
    try {
      const response = await this.participantRepository.findOne({
        where: { id: idParticipant },
      });
      return response;
    } catch (error) {
      console.error('Get that one participant err > ', error);
    }
  }

  remove(id: string) {
    return `This action removes a #${id} participant`;
  }
}
