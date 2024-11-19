import { Component } from '@angular/core';
import { ReporteService } from 'src/app/service/reporte.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent {

  constructor(private reporteService: ReporteService) {}

  generarReporte(): void {
    const username = 'admin'; // Puedes reemplazarlo por un usuario dinámico.
    const password = 'admin123'; // Puedes usar un input o valor seguro.

    this.reporteService.generateReport(username, password).subscribe({
      next: (response) => {
        alert('Reporte generado exitosamente.');
        console.log('Reporte:', response);
        // Aquí puedes manejar la respuesta como descargar un archivo o mostrar un mensaje.
      },
      error: (error) => {
        alert('Error al generar el reporte.');
        console.error('Error:', error);
      }
    });
  }
}
