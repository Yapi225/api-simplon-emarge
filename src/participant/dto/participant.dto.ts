import { IsNotEmpty, IsEmail } from 'class-validator';

export class ParticipantDto {
  @IsNotEmpty()
  nom: string;

  @IsNotEmpty()
  prenom: string;

  @IsNotEmpty()
  tel: string;
  
  @IsNotEmpty()
  @IsEmail()
  email: string;
}
