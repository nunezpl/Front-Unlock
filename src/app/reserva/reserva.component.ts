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
  @Input() date: string | Date = new Date(); // Acepta `string` o `Date`
  @Input() evento: Evento | null = null; // El evento que se reserva
  @Output() onReservaRealizada = new EventEmitter<Registro>();
  @Output() close = new EventEmitter<void>();  // Emisión para cerrar el modal

  // Usuario quemado
  usuario: Usuario = {
    id: 1,
    nombre: 'Juan Pérez',
    email: 'juan.perez@mail.com',
    telefono: 31212312,
    estado: 'activo',
    password: '123456'
  };

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
    if (this.evento) {
      const registro: Registro = {
        id: Math.floor(Math.random() * 1000000), // ID generado aleatoriamente
        usuario: this.usuario, // Usuario quemado
        evento: this.evento,
        fechaRegistro: new Date().toISOString(),
        estadoPago: 'Pendiente',
      };

      alert(`Reserva realizada para ${this.adultsCount} personas en ${this.location} el ${this.date}.`);
      this.onReservaRealizada.emit(registro);
    } else {
      alert('No hay evento seleccionado para la reserva.');
    }
  }

  closeModal(): void {
    this.close.emit(); // Notifica al padre que el modal debe cerrarse
  }
}
