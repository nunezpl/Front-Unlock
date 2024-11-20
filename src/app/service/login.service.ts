import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  loginAdmin(email: string, password: string): Observable<any> {
    const body = { email, password };
    return this.http.post(`https://apigetawaycontainer-production.up.railway.app/auth/admin-login`, body, { responseType: 'text' });
  }

  loginUser(email: string, password: string): Observable<any> {
    const body = { email, password };
    return this.http.post(`https://apigetawaycontainer-production.up.railway.app/auth/login`, body, { responseType: 'text' });
  }

}

