import { Component, OnInit } from '@angular/core';
import { Registro } from '../registro';
import { Router } from '@angular/router';
import { EventoService } from 'src/app/service/evento.service';

@Component({
  selector: 'app-exitoso',
  templateUrl: './exitoso.component.html',
  styleUrls: ['./exitoso.component.css']
})
export class ExitosoComponent implements OnInit {
  registro!: Registro | null; // Registro que se mostrará

  constructor(private registroService: EventoService, private router: Router) {}

  ngOnInit(): void {
    this.registro = this.registroService.getRegistro(); // Obtiene el registro desde el servicio

    if (!this.registro) {
      console.error('No se encontró información de la reserva.');
      this.router.navigate(['/']); // Redirige a la página principal si no hay registro
    }
  }

  onExit(): void {
    console.log('Salir');
    this.router.navigate(['/']); // Lógica para salir o redirigir
  }

  onViewBooking(): void {
    console.log('Ver reserva');
    // Navega a una página de detalles o realiza otra acción
    this.router.navigate(['/user']);
  }
}
