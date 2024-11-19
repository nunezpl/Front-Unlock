import { Component, Input } from '@angular/core';
import { Registro } from '../registro';

@Component({
  selector: 'app-exitoso',
  templateUrl: './exitoso.component.html',
  styleUrls: ['./exitoso.component.css']
})
export class ExitosoComponent {
  @Input() registro!: Registro;

  onExit() {
    console.log('Exit clicked');
    // Lógica para navegar o cerrar sesión
  }

  onViewBooking() {
    console.log('View booking clicked');
    // Lógica para ir a los detalles de la reserva
  }
}
