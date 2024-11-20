import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReporteService {

  constructor(private http: HttpClient) { }

  generateReport(IdAdministrador: number): Observable<any> {
    return this.http.post(`https://apigetawaycontainer-production.up.railway.app/reports/generate-report/`, IdAdministrador, { responseType: 'text' });
  }
  
}
