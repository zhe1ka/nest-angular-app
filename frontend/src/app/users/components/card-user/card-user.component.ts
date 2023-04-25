import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import constants from '@shared/constants';
import { IUserWeather } from '@users/interfaces/user-weather.interface';

@Component({
  selector: 'card-user',
  templateUrl: './card-user.component.html',
  styleUrls: ['./card-user.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardUserComponent {
  @Input() avatar: string = '';
  @Input() age: number = 0;
  @Input() phone: string = '';
  @Input() name: string = '';
  @Input() gender: string = '';
  @Input() email: string = '';
  @Input() location: string = '';
  @Input() weather?: IUserWeather;

  formWeather(): string {
    if (!this.weather) {
      return 'Loading...';
    }

    const { code, current, type, min, max } = this.weather;

    return constants.weatherCodes.get(code)
      + ' Temperature: ' + current + type
      + ' (min: ' + min + ' / max: ' + max + ')';
  }
}
