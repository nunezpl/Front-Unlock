import { Component } from '@angular/core';
import { Usuario } from '../usuario';

@Component({
  selector: 'app-user-all',
  templateUrl: './user-all.component.html',
  styleUrls: ['./user-all.component.css']
})
export class UserAllComponent {

  usuarios: Usuario[] = [
    { id: 1, nombre: 'Maria Velez', email: 'maria@example.com', estado: 'Activo', password: '123456' },
    { id: 2, nombre: 'Juan Perez', email: 'juan@example.com', estado: 'Inactivo', password: '654321' },
    { id: 3, nombre: 'Sebastian Rojas', email: 'sebastian@example.com', estado: 'Activo', password: 'abcdef' },
    { id: 4, nombre: 'Juana Lopez', email: 'juana@example.com', estado: 'Inactivo', password: 'ghijkl' },
    { id: 5, nombre: 'Mario Mendez', email: 'mario@example.com', estado: 'Activo', password: 'mnopqr' },
  ];

  cantidadActivos: number = 0;
  cantidadInactivos: number = 0;

  ngOnInit(): void {
    this.actualizarContadores();
  }

  // Método para calcular la cantidad de usuarios activos e inactivos
  private actualizarContadores(): void {
    this.cantidadActivos = this.usuarios.filter(user => user.estado === 'Activo').length;
    this.cantidadInactivos = this.usuarios.filter(user => user.estado === 'Inactivo').length;
  }

  // Cambiar estado de usuario
  toggleActive(user: Usuario): void {
    user.estado = user.estado === 'Activo' ? 'Inactivo' : 'Activo';
    this.actualizarContadores();
  }

}
