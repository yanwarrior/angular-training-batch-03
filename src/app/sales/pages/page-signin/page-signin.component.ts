import { Component } from '@angular/core';
import { IUser } from '../../interfaces/i-user';
import { IError } from '../../interfaces/i-error';
import { UserService } from '../../services/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/internal/operators/catchError';
import { throwError } from 'rxjs/internal/observable/throwError';
import { IToken } from '../../interfaces/i-token';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-signin',
  templateUrl: './page-signin.component.html',
  styleUrls: ['./page-signin.component.css']
})
export class PageSigninComponent {
  user: IUser;
  error: IError;

  constructor(private userService: UserService, private router: Router) {
    this.user = {
      email: "",
      password: ""
    }

    this.error = {detail: ""}
  }

  onSignIn() {
    this.userService.signIn(this.user)
      .pipe(catchError((error: HttpErrorResponse) => {
        // console.log(error.error.detail);
        this.error.detail = error.error.detail;
        return throwError(() => new Error(`Something bad happened; please try again later.`));      
      }))
      .subscribe(
        (response: IToken) => {
          this.userService.setAuthenticated(response);
          this.router.navigate(['/sales/main/barang'])
        }
      )
  }
}
