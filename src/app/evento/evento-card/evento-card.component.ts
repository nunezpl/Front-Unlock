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
  events: Evento[] = [];

  // Inyectar dependencias
  constructor(
    private route: ActivatedRoute,
    private eventoService: EventoService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void{
    this.route.paramMap.subscribe(params => {
      this.eventoService.findAll().subscribe(
        (data) => {
          this.events = data; // Asignar los datos de eventos
          this.cdr.detectChanges(); // Detectar cambios si es necesario
          console.log('Eventos obtenidos', this.events)
        },
        (error) => {
          console.error('Error al obtener los eventos', error); // Manejar errores
        }
      );
    });
  }

  // Filtrar eventos según el texto de búsqueda
  filteredEvents(): Evento[] {
    return this.events.filter(event =>
      event.nombre.toLowerCase().includes(this.searchQuery.toLowerCase())
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
