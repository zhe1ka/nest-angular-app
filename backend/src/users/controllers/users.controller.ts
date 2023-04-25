import { Body, Controller, Get, Query, Post } from '@nestjs/common';
import { AxiosResponse } from 'axios';

import UserDto from '../dto/user.dto';
import { UsersService } from '../services/users.service';
// interfaces
import { IResponseRandomUser } from '../interfaces/response-random-user.interface';
import { IRandomUser } from '../interfaces/random-user.interface';
import { IWeather } from '../interfaces/weather.interface';

@Controller('users')
export class UsersController {
  private usersService: UsersService;

  constructor(usersService: UsersService) {
    this.usersService = usersService;
  }

  @Post()
  createUser(@Body() user: UserDto) {
    this.usersService.create(user);
  }

  @Get()
  getAll(): Promise<UserDto[]> {
    return this.usersService.getAll();
  }

  @Get('/random')
  getRandomUsers(@Query('count') count: string): Promise<IRandomUser[]> {
    return new Promise((resolve, reject) => {
      return this.usersService.generateRandomUsers(count).subscribe({
        next: (result: AxiosResponse<IResponseRandomUser>) => {
          const promises = [];
          result.data.results.forEach((user: IRandomUser) => {
            promises.push(
              new Promise((resolve, reject) => {
                this.usersService
                  .getWeather(user.location.coordinates)
                  .subscribe({
                    next(weather: AxiosResponse<IWeather>) {
                      user.weather = weather.data;
                      resolve(user);
                    },
                    error() {
                      reject();
                    },
                  });
              }),
            );
          });

          Promise.allSettled(promises).then((results) => {
            const users = [];

            results.forEach((result) => {
              if (result.status === 'fulfilled' && result.value) {
                users.push(result.value);
              }
            });

            resolve(users);
          });
        },
        error() {
          reject([]);
        },
      });
    });
  }
}
