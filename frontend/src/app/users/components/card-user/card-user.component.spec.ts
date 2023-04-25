import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardUserComponent } from './card-user.component';
import { SharedModule } from '@shared/shared.module';

describe('CardUserComponent', () => {
  let component: CardUserComponent;
  let fixture: ComponentFixture<CardUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardUserComponent ],
      imports: [ SharedModule ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
