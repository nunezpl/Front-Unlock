import { ChangeDetectorRef, Component } from '@angular/core';
import { Evento } from 'src/app/evento/evento';
import { Router } from '@angular/router'; // Para la navegación
import { EventoService } from 'src/app/service/evento.service'; // Asegúrate de tener un servicio para interactuar con los eventos

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent {

  events: Evento[] = [];

  constructor(
    private router: Router,
    private eventoService: EventoService, // Servicio para manejar eventos
    private cdr: ChangeDetectorRef
  ) {}

  onInit(){

    this.eventoService.findAll().subscribe(
      (data) => {
        this.events = data; // Asignar los datos de eventos
        this.cdr.detectChanges(); // Detectar cambios si es necesario
      },
      (error) => {
        console.error('Error al obtener los eventos', error); // Manejar errores
      }
    );

  }
  
  // Acción al hacer clic en "Entrar"
  entrarEvento(event: Evento): void {
    event.status = 'Activo'; // Cambia el estado a 'Activo'
    alert(`Entrando al evento: ${event.nombre}`);

    // Lógica para ir a la página de registro o éxito
    this.router.navigate(['/registro-exito']); // Asegúrate de que esta ruta esté configurada
  }

  // Acción al hacer clic en "Salir"
  salirEvento(event: Evento): void {
    event.status = 'Inactivo'; // Cambia el estado a 'Inactivo'
    alert(`Saliendo del evento: ${event.nombre}`);

    // Lógica para regresar a la página del usuario
    this.router.navigate(['/user']); // Ruta de la página de usuario
  }
}
