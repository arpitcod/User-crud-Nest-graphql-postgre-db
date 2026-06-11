/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(Users) private readonly userRepo:Repository<Users>){}

  // create employee 
  async create(input: CreateUserInput):Promise<Users> {
      const user = await this.userRepo.create(input);
      return this.userRepo.save(user); 
  }

  // find all user 
 async findAll():Promise<Users[]> {
    return await this.userRepo.find();
  }

  //find one user 
  async findOne(id: string):Promise<Users> {
    const user = await this.userRepo.findOne({ where: {id}});
    if (!user) throw new NotFoundException(`user #${id} not found`);
    return user; 
  }

  // update user 
  async update(input: UpdateUserInput): Promise<Users> {
    const user = await this.findOne(input.id);
    // console.log('input',input);
    // console.log('input_id',input.id);
    // console.log('user',user);
    Object.assign(user,input)
    return this.userRepo.save(user);  
  }

  // delete user 
  async remove(id: string):Promise<boolean> {
    const user = await this.findOne(id);
    await this.userRepo.remove(user);
    return true;
  }
}
