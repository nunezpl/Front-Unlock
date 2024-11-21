import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Usuario } from '../usuario/usuario';
import { Evento } from '../evento/evento';
import { Registro } from '../registro/registro';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { EventoService } from '../service/evento.service';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent {

  constructor(
    private router: Router, 
    private registroService: EventoService,
    private snackBar: MatSnackBar
  ) {}

  @Input() location: string = '';
  @Input() date: string | Date = new Date(); // Acepta `string` o `Date`
  @Input() evento: Evento | null = null; // El evento que se reserva
  @Output() onReservaRealizada = new EventEmitter<Registro>();
  @Output() close = new EventEmitter<void>();  // Emisión para cerrar el modal

  // Usuario quemado
  usuario: Usuario = {
    nombre: 'Juan Pérez',
    email: 'juan.perez@mail.com',
    telefono: '31212312',
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

      this.openSnackBar(`Reserva realizada para ${this.adultsCount} personas en ${this.location} el ${this.date}.`, 'Cerrar');
      this.onReservaRealizada.emit(registro);
      this.registroService.setRegistro(registro); // Guardar el registro
      this.router.navigate(['/registro/exitoso']);  // Redirigir a la URL construida

    } else {
      alert('No hay evento seleccionado para la reserva.');
    }  }

  // Método para abrir el snackbar
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000, // Duración en milisegundos
    });
  }

  closeModal(): void {
    this.close.emit(); // Notifica al padre que el modal debe cerrarse
  }
}
