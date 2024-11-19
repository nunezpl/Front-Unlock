import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReporteService {

  constructor(private http: HttpClient) { }

  generateReport(username: string, password: string): Observable<any> {
    const body = { username, password };
    return this.http.post(`https://reportmanagmentcontainer-production.up.railway.app/reports/generate-report/10`, body, { responseType: 'text' });
  }
  
}
