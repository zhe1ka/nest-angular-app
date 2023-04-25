import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ui-info-field',
  templateUrl: './info-field.component.html',
  styleUrls: ['./info-field.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InfoFieldComponent {
  @Input() label = '';
  @Input() title: string | number = '';
}
