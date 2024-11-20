import { ChangeDetectorRef, Component } from '@angular/core';
import { Alojamiento } from '../alojamiento';
import { ActivatedRoute } from '@angular/router';
import { AlojamientoService } from 'src/app/service/alojamiento.service';

@Component({
  selector: 'app-alojamiento-card',
  templateUrl: './alojamiento-card.component.html',
  styleUrls: ['./alojamiento-card.component.css']
})
export class AlojamientoCardComponent {

  // Inyectar dependencias
  constructor(
    private route: ActivatedRoute,
    private alojamientoService: AlojamientoService,
    private cdr: ChangeDetectorRef
  ) {}
  
  searchQuery: string = '';
  alojamientos: Alojamiento[] = [];

  ngOnInit(): void{
    this.route.paramMap.subscribe(params => {
      this.alojamientoService.findAll().subscribe(
        (data) => {
          this.alojamientos = data; // Asignar los datos de eventos
          this.cdr.detectChanges(); // Detectar cambios si es necesario
          console.log('Eventos obtenidos', this.alojamientos)
        },
        (error) => {
          console.error('Error al obtener los eventos', error); // Manejar errores
        }
      );
    });
  }

  // Filtrar alojamientos según el texto de búsqueda
  filteredAlojamientos(): Alojamiento[] {
    return this.alojamientos.filter(alojamiento =>
      alojamiento.nombre.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  // Reservar alojamiento
  reserveAlojamiento(alojamiento: Alojamiento): void {
    if (alojamiento.status) {
      alert(`Reserva realizada para el alojamiento: ${alojamiento.nombre} en ${alojamiento.ciudad}`);
    } else {
      alert(`El alojamiento: ${alojamiento.nombre} no está disponible actualmente.`);
    }
  }
}
