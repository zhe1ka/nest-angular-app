import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NotificationColorsEnum, NotificationColorsTypes } from '../../enums/notification-colors.enum';

@Component({
  selector: 'ui-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotificationComponent {
  @Input() color: NotificationColorsTypes = NotificationColorsEnum.red;
  @Input() classNames = '';

  get classes() {
    let classNames = 'ui-notification';

    if (this.color) {
      classNames += ` ${this.color}`;
    }

    if (this.classNames) {
      classNames += ` ${this.classNames}`;
    }

    return classNames;
  }
}
