import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { RandomUsersComponent } from './random-users.component';
import { SharedModule } from '@shared/shared.module';

describe('RandomUsersComponent', () => {
  let component: RandomUsersComponent;
  let fixture: ComponentFixture<RandomUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomUsersComponent ],
      imports: [ HttpClientTestingModule, SharedModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RandomUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
