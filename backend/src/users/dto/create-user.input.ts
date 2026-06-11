/* eslint-disable prettier/prettier */
import { InputType, Int, Field } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, Min } from 'class-validator';

@InputType()
export class CreateUserInput {


    @Field()
    @IsNotEmpty({message:'name required'})
    name:string

    @Field()
    @IsEmail({}, { message: 'pls fill valid email' }) // email format check
    email: string;

    @Field(() => Int)
    @IsNotEmpty({ message: 'age required' }) // email format check
    @Min(15,{message:'Age must be at least 15'})
    age: number;

    @Field({nullable:true})
    @IsNotEmpty({ message: 'salery required' }) // email format check
    @Min(100,{message:'Minimum salary is 100 '})
    salary: number;

}
