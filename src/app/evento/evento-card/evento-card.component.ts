import { ChangeDetectorRef, Component, EventEmitter, Output } from '@angular/core';
import { Evento } from '../evento';
import { ActivatedRoute } from '@angular/router';
import { EventoService } from 'src/app/service/evento.service';

@Component({
  selector: 'app-evento-card',
  templateUrl: './evento-card.component.html',
  styleUrls: ['./evento-card.component.css']
})
export class EventoCardComponent {

  @Output() close = new EventEmitter<void>();
  @Output() eventoSeleccionado = new EventEmitter<Evento>();  // Nuevo Output para pasar el evento
  selectedEvent: Evento | null = null; // Evento seleccionado
  searchQuery: string = '';
  events: Evento[] = [
    {
      id: 1,
      name: 'Concierto de Rock',
      urlImage: 'https://www.radioacktiva.com/wp-content/uploads/2024/01/rock-10124.jpg',
      place: 'Auditorio Nacional',
      date: new Date('2024-11-20'),
      price: 50000,
      aforo: 100,
      status: 'activo'
    },
    {
      id: 2,
      name: 'Feria de Arte',
      urlImage: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiN1l4jSroppz08Mf3aSTTaC-7039tPOvUELeRrIKEA01O5mS9mTanQQTD9TERjvDnDwEwr3wRWbOMgwf6k7Up4I1T2g6O58KEZVLJ55IF02ECoK7rdbvKx5HlzC-dnLcqnKtR6mIhJkyiF/s1600/resized_650x365_origimage_502443.jpg',
      place: 'Centro Cultural',
      date: new Date('2024-12-05'),
      price: 20000,
      aforo: 50,
      status: 'inactivo'
    }
  ];

  // Inyectar dependencias
  constructor(
    private route: ActivatedRoute,
    private eventoService: EventoService,
    private cdr: ChangeDetectorRef
  ) {}

  // Filtrar eventos según el texto de búsqueda
  filteredEvents(): Evento[] {
    return this.events.filter(event =>
      event.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  // Abrir modal de reserva
  openReservationModal(event: Evento): void {
    this.selectedEvent = event; // Almacena el evento seleccionado
    this.eventoSeleccionado.emit(event);  // Emite el evento seleccionado al padre
  }

  // Cerrar modal de reserva
  closeReservationModal() {
    this.close.emit(); // Emite el evento para cerrar el modal
  }
}
