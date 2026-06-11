/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsUUID, Min } from 'class-validator';
import { CreateUserInput } from './create-user.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateUserInput extends PartialType(CreateUserInput) {

      @Field(() => String)
      @IsUUID()
      id: string; // UUID string

      // @Field()
      // @IsNotEmpty({message:'name required'})
      // name:string
  
      // @Field()
      // @IsNotEmpty({ message: 'age required' }) // email format check
      // @Min(1)
      // age: number;
  
      // @Field({nullable:true})
      // @IsNotEmpty({ message: 'salery required' }) // email format check
      // @Min(10)
      // salary: number;
}
