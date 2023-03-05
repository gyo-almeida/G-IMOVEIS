import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
  OneToMany,
} from "typeorm";
import { Address } from "./addresses";
import { Category } from "./categories";

@Entity("real_estate")
export class RealEstate {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ default: false })
  sold: boolean;

  @Column("decimal", { precision: 12, scale: 2, default: 0 })
  value: number | string;

  @Column()
  size: number;

  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updatedAt: string;

  @OneToOne(() => Address)
  @JoinColumn()
  addressId: Address;

  @OneToMany(() => Category, (category) => category.id)
  categoryId: Category;
}
