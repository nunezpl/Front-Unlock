import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/service/usuario.service';
import { Usuario } from '../usuario';

@Component({
  selector: 'app-user-registro',
  templateUrl: './user-registro.component.html',
  styleUrls: ['./user-registro.component.css']
})
export class UserRegistroComponent {
  constructor(
    private usuarioService: UsuarioService,
    private router: Router
  ) {
    
  }

  @Input() 
  selectedUser!: Usuario | null;

  @Output() addUserEvent = new EventEmitter<Usuario>();

  sendUser!: Usuario;

  formUser: Usuario = {
    nombre: '',
    telefono: 0,
    email: '',
    password: '',
    estado: 'activo',
    id: 0
  };

  ngOnChanges() {
    if (this.selectedUser) {
      this.formUser = { ...this.selectedUser }; // Llena el formulario con los datos de la mascota
    } else {
      this.resetForm(); // Resetea el formulario si no hay mascota seleccionada
    }
  }
  resetForm() {
    this.formUser = {
      nombre: '',
      telefono: 0,
      email: '',
      password: '',
      estado: 'activo',
      id: 0
    };
  }
  addUserForm() {
    console.log(this.formUser);
    this.sendUser = Object.assign({}, this.formUser);
    this.usuarioService.addUser(this.sendUser);
    this.resetForm(); 
    window.scrollTo(0, 0);
  }
  
  onSubmit() {
    console.log('Formulario enviado con los siguientes datos:', this.formUser);
    this.usuarioService.addUser(this.formUser).subscribe(response => {
      console.log('Respuesta del servidor:', response);
      this.router.navigate(['/owner/all']);
    });
    this.resetForm();  // Opcional: Restablece el formulario
  }

}
