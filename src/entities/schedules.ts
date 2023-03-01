import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  OneToMany,
} from "typeorm";
import { RealEstate } from "./real_estate";
import { User } from "./users";

@Entity("schedules_users_properties")
export class Schedule {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column("date")
  date: string;

  @Column("time")
  hour: number;

  @OneToMany(() => RealEstate, (realEstate) => realEstate.id)
  realEstateId: RealEstate;

  @OneToOne(() => User)
  @JoinColumn()
  userId: User;
}
