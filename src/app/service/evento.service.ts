import { Injectable } from '@angular/core';
import { Observable, map, switchMap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Evento } from '../evento/evento';
import { Registro } from '../registro/registro';

@Injectable({
  providedIn: 'root'
})
export class EventoService {

  constructor(
    private http: HttpClient
  ) { }

  findAll(): Observable<Evento[]> {
    return this.http.get<Evento[]>(`https://eventmanagmentcontainer-production.up.railway.app/events/eventos/`);
  }

  findById(id: number): Observable<Evento> {
    return this.http.get<Evento>(`https://eventmanagmentcontainer-production.up.railway.app/events/eventos/` + id);
  }

  // Método para cambiar el estado de un evento
  actualizarEstadoEvento(event: Evento, estado: string): void {
    event.status = estado;
    // Aquí puedes agregar lógica para actualizar el estado en una base de datos
    console.log(`El estado del evento ${event.nombre} ha sido actualizado a ${estado}`);
  }

  private registro: Registro | null = null;

  setRegistro(data: Registro): void {
    this.registro = data;
  }

  getRegistro(): Registro | null {
    return this.registro;
  }
}
