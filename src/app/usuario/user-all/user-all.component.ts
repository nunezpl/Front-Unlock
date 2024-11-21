import { ChangeDetectorRef, Component } from '@angular/core';
import { Usuario } from '../usuario';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-user-all',
  templateUrl: './user-all.component.html',
  styleUrls: ['./user-all.component.css']
})
export class UserAllComponent {

  usuarios: Usuario[] = [];

  cantidadActivos: number = 0;
  cantidadInactivos: number = 0;

  // Inyectar dependencias
  constructor(
    private route: ActivatedRoute,
    private usuarioService: UsuarioService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void{
    this.route.paramMap.subscribe(params => {
      this.usuarioService.findAll().subscribe(
        (data) => {
          this.usuarios = data; // Asignar los datos de usuarios
          this.cdr.detectChanges(); // Detectar cambios si es necesario
          console.log('usuarios obtenidos', this.usuarios)
        },
        (error) => {
          console.error('Error al obtener los usuarios', error); // Manejar errores
        }
      );
    });
    this.actualizarContadores();
  }

  // Método para calcular la cantidad de usuarios activos e inactivos
  private actualizarContadores(): void {
    this.cantidadActivos = this.usuarios.filter(user => user.estado.toLowerCase() === 'activo').length;
    this.cantidadInactivos = this.usuarios.filter(user => user.estado.toLowerCase() === 'inactivo').length;
  }

  // Cambiar estado de usuario
  toggleActive(user: Usuario): void {
    user.estado = user.estado.toLowerCase() === 'activo' ? 'Inactivo' : 'Activo';
    this.actualizarContadores();
  }

}
