import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// components
import { ButtonComponent } from './components/button/button.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { InfoFieldComponent } from './components/info-field/info-field.component';
import { ContainerComponent } from './components/container/container.component';
import { NotificationComponent } from './components/notification/notification.component';
import { SelectBoxComponent } from './components/select-box/select-box.component';

const components = [
  AvatarComponent,
  ButtonComponent,
  ContainerComponent,
  InfoFieldComponent,
  NotificationComponent,
];

@NgModule({
  declarations: [
    ...components,
    SelectBoxComponent,
  ],
  exports: [
    ...components,
    SelectBoxComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
