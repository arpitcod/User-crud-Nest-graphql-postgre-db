import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { Users } from './entities/user.entity';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';

@Resolver(() => Users)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  // create user 
  @Mutation(() => Users)
  createUser(@Args('createUserInput') input: CreateUserInput) {
    return this.usersService.create(input);
  }
// find all 
  @Query(() => [Users], { name: 'users' })
  findAll() {
    return this.usersService.findAll();
  }
// find one 
  @Query(() => Users, { name: 'user' })
  findOne(@Args('id') id: string) {
    return this.usersService.findOne(id);
  }

  // update user 
  @Mutation(() => Users)
  updateUser(
    // @Args('id') id: string,
    @Args('updateUserInput') input: UpdateUserInput){
    // return this.usersService.update(input);
    return this.usersService.update(input);
  }

  // delete user 
  @Mutation(() => Boolean)
  removeUser(@Args('id') id: string) {
    return this.usersService.remove(id);
  }
}
