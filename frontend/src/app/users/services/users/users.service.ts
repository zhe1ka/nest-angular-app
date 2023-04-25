import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
// interfaces
import { IUser } from '@users/interfaces/user.interface';
import { IRandomUser } from '@shared/interfaces/random-user.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  saveUser(user: IUser): Observable<IUser> {
    return this.http.post<IUser>('/api/users', user);
  }

  getAll(): Observable<IUser[]> {
    return this.http.get<IUser[]>('/api/users');
  }

  getRandomUsers(count = '2') {
    const params = new HttpParams()
      .set('count', count);

    return this.http.get('/api/users/random', { params });
  }

  formUserDetails(data: IRandomUser): IUser {
    const { title, first, last } = data.name;
    const { street, coordinates } = data.location;

    return {
      age: data.dob.age,
      phone: data.phone,
      name: `${title} ${first} ${last}`,
      gender: data.gender,
      avatar: data.picture.large,
      email: data.email,
      location: `${street.number} ${street.name}`,
      coordinate: {
        lat: coordinates.latitude,
        lng: coordinates.longitude,
      },
    };
  }

  formWeather({ current_weather, hourly, hourly_units }: any) {
    const oneDayTemperature: number[] = hourly.temperature_2m.slice(0, 24);

    return {
      current: current_weather.temperature,
      code: current_weather.weathercode,
      min: Math.min(...oneDayTemperature),
      max: Math.max(...oneDayTemperature),
      type: hourly_units.temperature_2m,
    };
  }
}
