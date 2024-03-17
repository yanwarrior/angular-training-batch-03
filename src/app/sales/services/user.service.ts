import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IToken } from '../interfaces/i-token';
import { IUser } from '../interfaces/i-user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  token: IToken;
  tokenKey: string = "TOKEN"
  
  constructor(private httpClient: HttpClient) {
    this.token = {
      token: localStorage.getItem(this.tokenKey) || ""
    }
  }

  signIn(user: IUser): Observable<IToken> {
    const headers = {
      'Content-Type': 'application/json'
    };
    const body = JSON.stringify(user);
    return this.httpClient.post<IToken>(`${environment.apiUrl}/user/signin`, user, { headers });
  }

  get isAuthenticated(): boolean {
    if (this.token.token) {
      return true;
    }

    return false;
  } 

  signout(): void {
    localStorage.setItem(this.tokenKey, "")
  }

  setAuthenticated(token: IToken) {
    this.token = token;
    localStorage.setItem(this.tokenKey, token.token);
  }

  getToken(): string {
    return this.token.token || localStorage.getItem(this.tokenKey) || ""
  }

}
