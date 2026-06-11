/* eslint-disable @typescript-eslint/no-unsafe-call */
import { ObjectType, Field} from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Users {

  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column()
  name:string;

  @Field()
  @Column({unique:true})
  email:string;

  @Field({nullable:true})
  @Column({nullable:true})
  age:number;

  @Field()
  @Column()
  salary:number;

  @Field()
  @CreateDateColumn()
  createdAt: Date;

}
