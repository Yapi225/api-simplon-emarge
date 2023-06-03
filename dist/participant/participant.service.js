"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParticipantService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const participant_entity_1 = require("./entities/participant.entity");
let ParticipantService = class ParticipantService {
    constructor(participantRepository) {
        this.participantRepository = participantRepository;
    }
    async create(participant) {
        try {
            const respo = await this.participantRepository.save(participant);
            return respo;
        }
        catch (error) {
            console.error('Save participant service err > ', error);
        }
    }
    async findAll() {
        try {
            const respo = await this.participantRepository.find();
            return respo;
        }
        catch (error) {
            console.error('Get All participants err > ', error);
        }
    }
    async findOne(idParticipant) {
        try {
            const response = await this.participantRepository.findOne({
                where: { id: idParticipant },
            });
            return response;
        }
        catch (error) {
            console.error('Get that one participant err > ', error);
        }
    }
    remove(id) {
        return `This action removes a #${id} participant`;
    }
};
ParticipantService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(participant_entity_1.ParticipantEntity)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], ParticipantService);
exports.ParticipantService = ParticipantService;
//# sourceMappingURL=participant.service.js.map