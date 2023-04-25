import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ui-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContainerComponent {
  @Input() noBorder = false;

  get classes() {
    let classNames = 'ui-container';

    if (this.noBorder) {
      classNames += ' no-border';
    }

    return classNames;
  }

}
