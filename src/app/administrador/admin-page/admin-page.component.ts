import { Component } from '@angular/core';
import { ReporteService } from 'src/app/service/reporte.service';
import { ChartData, ChartOptions } from 'chart.js';
import { Usuario } from 'src/app/usuario/usuario';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css'],
})
export class AdminPageComponent {
  
  constructor(private reporteService: ReporteService) {}

  // Datos para la gráfica de barras
  barChartData: ChartData<'bar'> = {
    labels: ['Agosto', 'Septiembre', 'Octubre', 'Noviembre'],
    datasets: [
      {
        data: [59, 80, 81, 56],
        label: 'Ventas',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  barChartOptions: ChartOptions<'bar'> = {
    responsive: true,
    scales: {
      x: {
        title: {
          display: true,
          text: 'Meses',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Cantidad',
        },
      },
    },
  };

  // Datos para la gráfica de pastel
  pieChartData: ChartData<'pie'> = {
    labels: ['Dentro', 'Afuera', 'Error'],
    datasets: [
      {
        data: [300, 150, 20],
        backgroundColor: ['#56FF33', '#33C6FF', '#FF5733'],
      },
    ],
  };

  pieChartOptions: ChartOptions<'pie'> = {
    responsive: true,
  };

  // Generar reporte
  generarReporte(): void {
    this.reporteService.generateReport(10).subscribe({
      next: (response) => {
        alert('Reporte generado exitosamente.');
        console.log('Reporte:', response);
      },
      error: (error) => {
        alert('Error al generar el reporte.');
        console.error('Error:', error);
      },
    });
  }

  
}
