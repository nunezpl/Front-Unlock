import { Injectable } from '@angular/core';
import { Usuario } from '../usuario/usuario';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(
    private http: HttpClient
  ) { }

  addUser(usuario: Usuario): Observable<Usuario> {
    console.log('Usuario a agregar:', usuario); 
    return this.http.post<Usuario>(`https://auth-authzcontainer-production.up.railway.app/auth/usuarios/`, usuario);
  }

  findAll(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`https://auth-authzcontainer-production.up.railway.app/auth/getall-usuarios/`);
  }
}
