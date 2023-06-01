import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { ParticipantService } from './participant.service';
import { validate } from 'class-validator';
import { ParticipantDto } from './dto/participant.dto';

@Controller('participant')
export class ParticipantController {
  constructor(private readonly participantService: ParticipantService) {}

  @Post()
  async create(@Body() data: ParticipantDto) {
    const participant = new ParticipantDto();
    participant.nom = data.nom;
    participant.prenom = data.prenom;
    participant.tel = data.tel;
    participant.email = data.email;

    const validationErrors = await validate(participant);

    if (validationErrors.length > 0)
      console.error('Erreur validation > ', validationErrors);
    else return await this.participantService.create(participant);
  }

  @Get()
  async findAll() {
    return await this.participantService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.participantService.findOne(id);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.participantService.remove(id);
  }
}
