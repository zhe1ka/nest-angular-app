import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
// dto
import UserDto from '../dto/user.dto';
// schemas
import { User } from '../schemas/user.schema';
// constants
import constants from '../../constants';
import { IResponseRandomUser } from '../interfaces/response-random-user.interface';
import { Observable } from 'rxjs';
import { IWeather } from '../interfaces/weather.interface';

@Injectable()
export class UsersService {
  private userModel: Model<User>;
  private readonly httpService: HttpService;

  constructor(@InjectModel(User.name) userModel, httpService: HttpService) {
    this.userModel = userModel;
    this.httpService = httpService;
  }

  create(user: UserDto): void {
    new this.userModel(user).save();
  }

  getAll(): Promise<UserDto[]> {
    return this.userModel
      .find(
        {},
        {
          name: 1,
          age: 1,
          phone: 1,
          gender: 1,
          avatar: 1,
          email: 1,
          location: 1,
          weather: 1,
          'coordinate.lat': 1,
          'coordinate.lng': 1,
        },
      )
      .sort({ _id: -1 })
      .exec();
  }

  generateRandomUsers(
    count: string,
  ): Observable<AxiosResponse<IResponseRandomUser>> {
    return this.httpService.get(
      `${constants.randomUserApiUrl}?results=${count}`,
    );
  }

  getWeather({
    latitude,
    longitude,
  }: {
    latitude: string;
    longitude: string;
  }): Observable<AxiosResponse<IWeather>> {
    const params = `current_weather=${true}&hourly=temperature_2m&latitude=${latitude}&longitude=${longitude}`;

    return this.httpService.get(
      `${constants.weatherApiUrl}/forecast?${params}`,
    );
  }
}
