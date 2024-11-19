import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Usuario } from '../usuario/usuario';
import { Evento } from '../evento/evento';
import { Registro } from '../registro/registro';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent {
  @Input() location: string = '';
  @Input() date: string | Date = new Date(); // Acepta tanto `string` como `Date`
  @Input() usuario: Usuario | null = null; // Se recibe el usuario desde el padre
  @Input() evento: Evento | null = null; // Se recibe el evento desde el padre
  @Output() onReservaRealizada = new EventEmitter<Registro>();
  @Output() close = new EventEmitter<void>(); // Para cerrar el modal

  adultsCount: number = 1;

  increment(): void {
    this.adultsCount++;
  }

  decrement(): void {
    if (this.adultsCount > 0) {
      this.adultsCount--;
    }
  }

  reservar(): void {
    if (this.usuario && this.evento) {
      const registro: Registro = {
        id: Math.floor(Math.random() * 1000000), // ID generado aleatoriamente
        usuario: this.usuario,
        evento: this.evento,
        fechaRegistro: new Date().toISOString(),
        estadoPago: 'Pendiente',
      };

      alert(`Reserva realizada para ${this.adultsCount} personas en ${this.location} el ${this.date}.`);
      this.onReservaRealizada.emit(registro);
    } else {
      alert('Falta información del evento o usuario.');
    }
  }

  closeModal(): void {
    this.close.emit(); // Notifica al padre que el modal debe cerrarse
  }
}
