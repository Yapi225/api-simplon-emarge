import { ParticipantService } from './participant.service';
import { ParticipantDto } from './dto/participant.dto';
export declare class ParticipantController {
    private readonly participantService;
    constructor(participantService: ParticipantService);
    create(data: ParticipantDto): Promise<import("./entities/participant.entity").ParticipantEntity>;
    findAll(): Promise<import("./entities/participant.entity").ParticipantEntity[]>;
    findOne(id: string): Promise<import("./entities/participant.entity").ParticipantEntity>;
    remove(id: string): Promise<string>;
}
