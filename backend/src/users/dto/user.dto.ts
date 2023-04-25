import { IsNumber, IsObject, IsString } from 'class-validator';

export default class UserDto {
  @IsString()
  name: string;

  @IsNumber()
  age: number;

  @IsString()
  phone: string;

  @IsString()
  gender: string;

  @IsString()
  avatar: string;

  @IsString()
  email: string;

  @IsString()
  location: string;

  @IsObject()
  weather: {
    type: string;
    min: number;
    max: number;
    current: number;
    code: number;
  };

  @IsObject()
  coordinate: {
    lat: string;
    lng: string;
  };
}
