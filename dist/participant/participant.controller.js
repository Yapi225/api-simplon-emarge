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
exports.ParticipantController = void 0;
const common_1 = require("@nestjs/common");
const participant_service_1 = require("./participant.service");
const class_validator_1 = require("class-validator");
const participant_dto_1 = require("./dto/participant.dto");
let ParticipantController = class ParticipantController {
    constructor(participantService) {
        this.participantService = participantService;
    }
    async create(data) {
        const participant = new participant_dto_1.ParticipantDto();
        participant.nom = data.nom;
        participant.prenom = data.prenom;
        participant.tel = data.tel;
        participant.email = data.email;
        const validationErrors = await (0, class_validator_1.validate)(participant);
        if (validationErrors.length > 0)
            console.error('Erreur validation > ', validationErrors);
        else
            return await this.participantService.create(participant);
    }
    async findAll() {
        return await this.participantService.findAll();
    }
    async findOne(id) {
        return await this.participantService.findOne(id);
    }
    async remove(id) {
        return await this.participantService.remove(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [participant_dto_1.ParticipantDto]),
    __metadata("design:returntype", Promise)
], ParticipantController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ParticipantController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ParticipantController.prototype, "findOne", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ParticipantController.prototype, "remove", null);
ParticipantController = __decorate([
    (0, common_1.Controller)('participant'),
    __metadata("design:paramtypes", [participant_service_1.ParticipantService])
], ParticipantController);
exports.ParticipantController = ParticipantController;
//# sourceMappingURL=participant.controller.js.map