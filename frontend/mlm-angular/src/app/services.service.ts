import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://mlmcreatorsindia.com/outerapi/api.php';

  constructor(private http: HttpClient) {}

    // Define the checksid function
    checksid(sid: string): Promise<any> {
      return this.http.get(`https://mlmcreatorsindia.com/outerapi/api.php/${sid}`).toPromise(); // Replace 'URL_TO_CHECK_SID' with the actual URL for checking sid
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
