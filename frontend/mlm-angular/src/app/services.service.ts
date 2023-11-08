import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://mlmcreatorsindia.com/outerapi/api.php';

  constructor(private http: HttpClient) {}

  checkSid(sid: string): Observable<any> {
    const data = {
      route: 'checksid',
      sid: sid
    };

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post(`${this.apiUrl}/checksid`, data, httpOptions);
  }

  login(username: string, password: string): Observable<any> {
    const body = { username, password };
    return this.http.post(this.apiUrl, body);
  }

  register(username: string, password: string, email: string): Observable<any> {
    const body = { username, password, email };
    return this.http.post(this.apiUrl, body);
  }
}
