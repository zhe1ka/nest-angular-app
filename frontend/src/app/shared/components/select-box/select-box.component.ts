import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'ui-select-box',
  templateUrl: './select-box.component.html',
  styleUrls: ['./select-box.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectBoxComponent {
  @Input() options: { title: string, value: string }[] = [];
  @Output() handleChange = new EventEmitter<string>();

  onChange(event: any) {
    this.handleChange.emit(event.target.value);
  }

  getItemIndex(index: number): number {
    return index;
  }
}
