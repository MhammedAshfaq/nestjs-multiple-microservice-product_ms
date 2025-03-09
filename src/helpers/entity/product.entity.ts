import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Status } from '../enums/status.enum';

@Entity('products') // Table name
export class Product {
  @PrimaryGeneratedColumn('uuid') // UUID type with default value
  id: string;
  @Column({ type: 'varchar', length: 100, nullable: true }) // VARCHAR(100) NOT NULL
  name: string;
  @Column({ type: 'text', nullable: true }) // VARCHAR(255) NULLABLE
  description: string;
  @Column({ type: 'int', nullable: true }) // INT NOT NULL
  price: number;
  @Column({ type: 'text', nullable: true }) // VARCHAR(255) NULLABLE
  photo: string;
  @Column({
    type: 'varchar',
    length: 10,
    default: Status.Active,
    enum: Status,
    nullable: true,
  })
  status: string;
  @CreateDateColumn({
    name: 'created_date',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    nullable: true,
  }) // Automatically set the current timestamp
  createdDate: Date;
  @UpdateDateColumn({
    name: 'updated_date',
    type: 'timestamp',
    nullable: true,
  })
  updatedDate: Date;
}
