import { Injectable } from '@angular/core';
import { Observable, map, switchMap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Alojamiento } from '../alojamiento/alojamiento';

@Injectable({
  providedIn: 'root'
})
export class AlojamientoService {

  constructor(
    private http: HttpClient
  ) { }

  findAll(): Observable<Alojamiento[]> {
    return this.http.get<Alojamiento[]>(`https://accommodationmanagementcontainer-production.up.railway.app/accommodations/alojamientos/`);
  }

  findById(id: number): Observable<Alojamiento> {
    return this.http.get<Alojamiento>(`https://accommodationmanagementcontainer-production.up.railway.app/accommodations/alojamientos/` + id);
  }

}
