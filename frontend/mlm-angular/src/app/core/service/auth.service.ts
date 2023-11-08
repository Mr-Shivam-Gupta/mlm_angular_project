import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, lastValueFrom, of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { User } from '../models/user';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem('currentUser') || '{}')
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(username: string, password: string) {
    const requestBody = {
      route: 'login',
      username: username,
      password: password
    };
    return this.http
    .post<User>(`${environment.authUrl}`, requestBody)
      .pipe(
        map((user) => {
          // store user details and jwt token in local storage to keep user logged in between page refreshes

          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
          return user;
        }) , catchError(this.handleError)
      );
  }
  checksid(sid:string){
    let route:string="checksid"
    return lastValueFrom(this.http.post(`${environment.signupUrl}`,{route,sid}))
  }

  signup(sid:string,name:string,mobile:string,email:string,password:string) {
    let route:string="register"
    return lastValueFrom(this.http.post(`${environment.signupUrl}`,{route,sid,name,mobile,email,password}))
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

  logout() {
    // remove user from local storage to log user out
    let route:string="logout"
    localStorage.removeItem('currentUser');
      this.currentUserSubject.next(this.currentUserValue);
      return lastValueFrom(this.http.post(`${environment.apiUrl}`,{route}))
   
  }
}
