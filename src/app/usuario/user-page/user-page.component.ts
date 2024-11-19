import { Component } from '@angular/core';
import { Evento } from 'src/app/evento/evento';
import { Router } from '@angular/router'; // Para la navegación
import { EventoService } from 'src/app/service/evento.service'; // Asegúrate de tener un servicio para interactuar con los eventos

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent {

  events: Evento[] = [
    {
      id: 1,
      name: 'Concierto de Rock',
      urlImage: 'https://www.radioacktiva.com/wp-content/uploads/2024/01/rock-10124.jpg',
      place: 'Auditorio Nacional',
      date: new Date('2024-11-20'),
      price: 50000,
      aforo: 100,
      status: 'Inactivo' // Estado inicial
    },
    {
      id: 2,
      name: 'Feria de Arte',
      urlImage: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiN1l4jSroppz08Mf3aSTTaC-7039tPOvUELeRrIKEA01O5mS9mTanQQTD9TERjvDnDwEwr3wRWbOMgwf6k7Up4I1T2g6O58KEZVLJ55IF02ECoK7rdbvKx5HlzC-dnLcqnKtR6mIhJkyiF/s1600/resized_650x365_origimage_502443.jpg',
      place: 'Centro Cultural',
      date: new Date('2024-12-05'),
      price: 20000,
      aforo: 50,
      status: 'Activo' // Estado inicial
    }
  ];

  constructor(
    private router: Router,
    private eventoService: EventoService // Servicio para manejar eventos
  ) {}

  // Acción al hacer clic en "Entrar"
  entrarEvento(event: Evento): void {
    event.status = 'Activo'; // Cambia el estado a 'Activo'
    alert(`Entrando al evento: ${event.name}`);

    // Lógica para ir a la página de registro o éxito
    this.router.navigate(['/registro-exito']); // Asegúrate de que esta ruta esté configurada
  }

  // Acción al hacer clic en "Salir"
  salirEvento(event: Evento): void {
    event.status = 'Inactivo'; // Cambia el estado a 'Inactivo'
    alert(`Saliendo del evento: ${event.name}`);

    // Lógica para regresar a la página del usuario
    this.router.navigate(['/user']); // Ruta de la página de usuario
  }
}
