import { ChangeDetectorRef, Component } from '@angular/core';
import { Evento } from 'src/app/evento/evento';
import { ActivatedRoute, Router } from '@angular/router'; // Para la navegación
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
    private route: ActivatedRoute,
    private eventoService: EventoService, // Servicio para manejar eventos
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.eventoService.findAll().subscribe(
        (data) => {
          // Normaliza el estado a minúsculas
          this.events = data.map(event => ({
            ...event,
            status: event.status.toLowerCase()
          }));
          this.cdr.detectChanges(); // Detectar cambios si es necesario
          console.log('Eventos obtenidos', this.events);
        },
        (error) => {
          console.error('Error al obtener los eventos', error); // Manejar errores
        }
      );
    });
  }

  // Acción al hacer clic en "Entrar"
  entrarEvento(event: Evento): void {
    event.status =  'activo'; // Cambia el estado a 'activo'
    alert(`Entrando al evento: ${event.nombre}`);

    // Lógica para ir a la página de registro o éxito
    this.router.navigate(['/registro-exito']); // Asegúrate de que esta ruta esté configurada
  }

  // Acción al hacer clic en "Salir"
  salirEvento(event: Evento): void {
    event.status = 'inactivo'; // Cambia el estado a 'inactivo'
    alert(`Saliendo del evento: ${event.nombre}`);

    // Lógica para regresar a la página del usuario
    this.router.navigate(['/user']); // Ruta de la página de usuario
  }

  
}
