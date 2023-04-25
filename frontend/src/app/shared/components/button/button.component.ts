import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonColorsEnum, ButtonColorsTypes } from '../../enums/button-colors.enum';

@Component({
  selector: 'ui-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {
  @Input() title = '';
  @Input() disabled = false;
  @Input() color: ButtonColorsTypes = ButtonColorsEnum.primary;
  @Input() classNames = '';

  @Output() handleClick = new EventEmitter();

  get classes() {
    let classNames = 'ui-button';

    if (this.color) {
      classNames += ` ${this.color}`;
    }

    if (this.classNames) {
      classNames += ` ${this.classNames}`;
    }

    return classNames;
  }

  onClick() {
    this.handleClick.emit();
  }
}
