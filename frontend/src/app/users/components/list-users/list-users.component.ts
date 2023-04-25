import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
// services
import { UsersService } from '@users/services/users/users.service';
// interfaces
import { IUser } from '@users/interfaces/user.interface';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListUsersComponent implements OnInit {
  private usersService: UsersService;
  private ref: ChangeDetectorRef;

  isError = false;
  users: IUser[] = [];

  constructor(
    usersService: UsersService,
    ref: ChangeDetectorRef
  ) {
    this.usersService = usersService;
    this.ref = ref;
  }

  ngOnInit() {
    this.usersService.getAll().subscribe({
      next: (users: IUser[]) => {
        this.users = users;
        this.ref.detectChanges();
      },
      error: (error: HttpErrorResponse) => {
        console.log('error', error);
        this.isError = true;
      },
    });
  }
}
