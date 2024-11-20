import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  loginAdmin(email: string, password: string): Observable<any> {
    const body = { email, password };
    return this.http.post<{ access_token: string; token_type: string }>('https://auth-authzcontainer-production.up.railway.app/auth/admin-login/', body)
      .pipe(tap((response) => {       // Guardar el token en localStorage
        localStorage.setItem('token', response.access_token);
      }));
  }

  loginUser(email: string, password: string): Observable<any> {
    const body = { email, password };
    return this.http.post<{ access_token: string; token_type: string }>('https://auth-authzcontainer-production.up.railway.app/auth/login/', body)
      .pipe(tap((response) => {       // Guardar el token en localStorage
        localStorage.setItem('token', response.access_token);
      }));
  }

}

