import { Component } from '@angular/core';
import { Alojamiento } from '../alojamiento';

@Component({
  selector: 'app-alojamiento-card',
  templateUrl: './alojamiento-card.component.html',
  styleUrls: ['./alojamiento-card.component.css']
})
export class AlojamientoCardComponent {

  searchQuery: string = '';
  alojamientos: Alojamiento[] = [
    {
      id: 1,
      name: 'Hotel Paraíso',
      urlImage: 'https://via.placeholder.com/150',
      ciudad: 'Cartagena',
      direccion: 'Calle 1252',
      convenio: 'hoteles',
      price: 300000,
      status: true,
      aforo: 1110
    },
    {
      id: 2,
      name: 'Cabaña Alpina',
      urlImage: 'https://via.placeholder.com/150',
      ciudad: 'Villa de Leyva',
      price: 200000,
      status: true,
      direccion: 'calle 432',
      aforo: 200,
      convenio: 'comida'
    }
    // Agrega más alojamientos aquí
  ];

  // Filtrar alojamientos según el texto de búsqueda
  filteredAlojamientos(): Alojamiento[] {
    return this.alojamientos.filter(alojamiento =>
      alojamiento.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  // Reservar alojamiento
  reserveAlojamiento(alojamiento: Alojamiento): void {
    if (alojamiento.status) {
      alert(`Reserva realizada para el alojamiento: ${alojamiento.name} en ${alojamiento.ciudad}`);
    } else {
      alert(`El alojamiento: ${alojamiento.name} no está disponible actualmente.`);
    }
  }
}
