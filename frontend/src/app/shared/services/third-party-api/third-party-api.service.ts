import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
// interfaces
import { IResponseRandomUser } from '@shared/interfaces/response-random-user.interface';
import { ICoordinate } from '@shared/interfaces/coordinate.interface';
import { IWeather } from '@shared/interfaces/weather.interface';
// constants
import constants from '@shared/constants';

@Injectable({
  providedIn: 'root'
})
export class ThirdPartyApiService {

  private http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  getRandomUser(): Observable<IResponseRandomUser> {
    return this.http.get<IResponseRandomUser>(constants.randomUserApiUrl);
  }

  getWeather({ lat, lng }: ICoordinate): Observable<IWeather> {
    const params = new HttpParams()
      .set('current_weather', true)
      .set('hourly', 'temperature_2m')
      .set('latitude', lat)
      .set('longitude', lng);

    return this.http.get<IWeather>(`${constants.weatherApiUrl}/forecast`, { params });
  }

}
