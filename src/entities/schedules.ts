import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne,
} from "typeorm";
import { RealEstate } from "./real_estate";
import { User } from "./users";

@Entity("schedules_users_properties")
export class Schedule {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "date" })
  date: string;

  @Column({ type: "time" })
  hour: number;

  @ManyToOne(() => RealEstate)
  realEstate: RealEstate;

  @ManyToOne(() => User)
  user: User;
}
