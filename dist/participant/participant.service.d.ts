import { ParticipantDto } from './dto/participant.dto';
import { Repository } from 'typeorm';
import { ParticipantEntity } from './entities/participant.entity';
export declare class ParticipantService {
    private readonly participantRepository;
    constructor(participantRepository: Repository<ParticipantEntity>);
    create(participant: ParticipantDto): Promise<ParticipantEntity>;
    findAll(): Promise<ParticipantEntity[]>;
    findOne(idParticipant: string): Promise<ParticipantEntity>;
    remove(id: string): string;
}
