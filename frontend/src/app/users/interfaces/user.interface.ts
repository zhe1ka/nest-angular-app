import { ICoordinate } from '@shared/interfaces/coordinate.interface';
import { IUserWeather } from '@users/interfaces/user-weather.interface';

export interface IUser {
  phone: string;
  age: number;
  name: string;
  gender: string;
  avatar: string;
  email: string;
  location: string;
  weather?: IUserWeather;
  coordinate: ICoordinate;
}
