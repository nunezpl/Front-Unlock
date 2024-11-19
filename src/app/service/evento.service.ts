import { Injectable } from '@angular/core';
import { Observable, map, switchMap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Evento } from '../evento/evento';

@Injectable({
  providedIn: 'root'
})
export class EventoService {

  constructor(
    private http: HttpClient
  ) { }

  findAll(): Observable<Evento[]> {
    return this.http.get<Evento[]>(`http://apigetawaycontainer-production.up.railway.app/events/eventos`);
  }

  findById(id: number): Observable<Evento> {
    return this.http.get<Evento>(`http://apigetawaycontainer-production.up.railway.app/events/eventos/` + id);
  }

}
