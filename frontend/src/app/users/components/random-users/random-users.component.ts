import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
// services
import { UsersService } from '@users/services/users/users.service';
// interfaces
import { IUser } from '@users/interfaces/user.interface';
import { HttpErrorResponse } from '@angular/common/http';
import { IRandomUser } from '@shared/interfaces/random-user.interface';
import { IUserWeather } from '@users/interfaces/user-weather.interface';

@Component({
  selector: 'random-users',
  templateUrl: './random-users.component.html',
  styleUrls: ['./random-users.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RandomUsersComponent implements OnInit {
  @ViewChild('selectBoxCounter') private selectBoxCounter: any;

  private usersService: UsersService;
  private ref: ChangeDetectorRef;

  isError = false;
  users: IUser[] = [];
  // keep saved emails
  emails = new Set<string>();

  constructor(
    usersService: UsersService,
    ref: ChangeDetectorRef
  ) {
    this.usersService = usersService;
    this.ref = ref;
  }

  get counterOptions() {
    return [
      { title: '1', value: '1' },
      { title: '2', value: '2' },
      { title: '5', value: '5' },
      { title: '10', value: '10' },
    ]
  }

  ngOnInit() {
    this.fetchUsers();
  }


  fetchUsers(counter = '1') {
    this.usersService.getRandomUsers(counter).subscribe({
      next: (data: any) => {
        this.users = data
          .map((value: IRandomUser): IUser => {
            const userDetails = this.usersService.formUserDetails(value);
            userDetails.weather = this.usersService.formWeather(value.weather);

            return userDetails;
          });

        this.ref.detectChanges();
      },
      error: (error: HttpErrorResponse) => {
        console.log('error', error);
        this.isError = true;
      },
    });
  }

  save(user: IUser) {
    this.isError = false;
    this.emails.add(user.email);

    this.usersService.saveUser(user)
      .subscribe({
        error: (error: HttpErrorResponse) => {
          this.emails.delete(user.email);
          console.log('error', error);
          this.isError = true;
        }
      });
  }

  isSaved(email: string): boolean {
    return this.emails.has(email);
  }

  changeCounter(counter: string) {
    this.fetchUsers(counter);
  }
}
