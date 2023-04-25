import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PublicComponent {}
