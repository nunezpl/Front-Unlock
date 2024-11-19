import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { EventoCardComponent } from './evento/evento-card/evento-card.component';
import { AlojamientoCardComponent } from './alojamiento/alojamiento-card/alojamiento-card.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ReservaComponent } from './reserva/reserva.component';
import { UserloginComponent } from './usuario/userlogin/userlogin.component';
import { ExitosoComponent } from './registro/exitoso/exitoso.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'contacto', component: ContactoComponent},

  // LogIn
  { path: 'login', component: LoginComponent },
  { path: 'user/login', component: UserloginComponent },

  // Eventos
  { path: 'eventos', component: EventoCardComponent},

  // Alojamientos
  { path: 'alojamientos', component: AlojamientoCardComponent},

  { path: 'reserva', component: ReservaComponent},
  { path: 'registro/exito', component: ExitosoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }