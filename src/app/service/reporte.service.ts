import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class ReporteService {
 
  private apiUrl = 'https://reportmanagmentcontainer-production.up.railway.app/reports/generate-report/';
 
  constructor(private http: HttpClient) {}
 
  generateReport(IdAdministrador: number): Observable<any> {
    const body = { IdAdministrador }; // Construir el cuerpo de la solicitud en formato JSON
    return this.http.post(this.apiUrl, body, { responseType: 'text' }); // Enviar el cuerpo como JSON
  }
}