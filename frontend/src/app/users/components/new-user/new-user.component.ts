import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
// services
import { ThirdPartyApiService } from '@shared/services/third-party-api/third-party-api.service';
import { UsersService } from '@users/services/users/users.service';
// interfaces
import { IResponseRandomUser } from '@shared/interfaces/response-random-user.interface';
import { IUser } from '@users/interfaces/user.interface';
import { IWeather } from '@shared/interfaces/weather.interface';

@Component({
  selector: 'new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewUserComponent implements OnInit {

  private thirdPartyApiService: ThirdPartyApiService;
  private usersService: UsersService;
  private ref: ChangeDetectorRef;

  isLoading = true;
  isError = false;
  // keep saved emails
  emails = new Set<string>();
  users: IUser[] = [];

  constructor(
    thirdPartyApiService: ThirdPartyApiService,
    usersService: UsersService,
    ref: ChangeDetectorRef
  ) {
    this.thirdPartyApiService = thirdPartyApiService;
    this.usersService = usersService;
    this.ref = ref;
  }

  ngOnInit(): void {
    this.getRandomUser();
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

  getRandomUser(): void {
    this.isError = false;
    this.isLoading = true;

    this.thirdPartyApiService.getRandomUser()
      .subscribe({
        next: (data: IResponseRandomUser) => {
          this.users = data.results.map(this.usersService.formUserDetails);
          this.updateWeatherForUsers(this.users);
        },
        error: (error: HttpErrorResponse) => {
          console.log('error', error);
          this.isError = true;
        }
      })
      .add(() => {
        this.isLoading = false;
        this.ref.detectChanges();
      });
  }

  updateWeatherForUsers(users: IUser[]): void {
    const promises: any = [];

    users.forEach((user: IUser) => {
      promises.push(
        new Promise((resolve, reject) => {
          this.thirdPartyApiService.getWeather(user.coordinate)
            .subscribe({
              next: (data: IWeather) => {
                resolve(data);
              },
              error: (error: HttpErrorResponse) => {
                reject(error);
              },
            });
        })
      );
    });

    Promise.allSettled(promises)
      .then((results) => {
        results.forEach((result, index) => {
          if (result.status === 'fulfilled' && result.value) {
            users[index].weather = this.usersService.formWeather(result.value);
          }
        });

        this.users = users;
        this.ref.detectChanges();
      });
  }

  isSaved(email: string): boolean {
    return this.emails.has(email);
  }

}
