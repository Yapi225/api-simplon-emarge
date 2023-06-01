import {
  Entity,
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('Participant')
export class ParticipantEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updatedAt: string;

  @Column({
    type: 'date',
    nullable: true,
  })
  deletedAt: string;

  @Column({
    nullable: false,
  })
  nom: string;

  @Column({
    nullable: false,
  })
  prenom: string;

  @Column({
    nullable: false,
  })
  tel: string;

  @Column({
    nullable: false,
  })
  email: string;
}
