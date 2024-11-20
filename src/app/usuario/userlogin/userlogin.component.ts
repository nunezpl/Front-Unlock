import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { LoginService } from '../../service/login.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent {
  constructor(
    private loginService: LoginService, 
    private router: Router, 
    private snackBar: MatSnackBar) {} // Inyectar MatSnackBar
  
    onSubmit(loginForm: NgForm) {
      if (loginForm.valid) {
        const email = loginForm.value.email;  // Obtener el usuario del formulario
        const password = loginForm.value.password;  // Obtener la contraseña del formulario
    
        console.log("Login: " + email + " - " + password);
    
        this.loginService.loginUser(email, password).subscribe({
          next: (response) => {
            console.log('Inicio de sesión exitoso', response);
            // Redirigir a la página de perfil del propietario (owner) después de un inicio de sesión exitoso
            const urlProfile = `/user`;
            this.router.navigate([urlProfile]);  // Redirigir a la URL construida
            
            // Mostrar un toast de éxito
            this.openSnackBar('Inicio de sesión exitoso!', 'Cerrar');
          },
          error: (error) => {
            console.error('Error al iniciar sesión', error);
            // Mostrar un toast de error si las credenciales son incorrectas
            this.openSnackBar('Credenciales incorrectas. Intenta nuevamente.', 'Cerrar');
          }
        });
      }
    }
  
    // Método para abrir el snackbar
    openSnackBar(message: string, action: string) {
      this.snackBar.open(message, action, {
        duration: 3000, // Duración en milisegundos
      });
    }
  }
  
