import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './administrador/login/login.component';
import { EventoCardComponent } from './evento/evento-card/evento-card.component';
import { AlojamientoCardComponent } from './alojamiento/alojamiento-card/alojamiento-card.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ReservaComponent } from './reserva/reserva.component';
import { UserloginComponent } from './usuario/userlogin/userlogin.component';
import { ExitosoComponent } from './registro/exitoso/exitoso.component';
import { AdminPageComponent } from './administrador/admin-page/admin-page.component';
import { UserPageComponent } from './usuario/user-page/user-page.component';

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
  { path: 'registro/exitoso', component: ExitosoComponent},

  { path: 'admin', component: AdminPageComponent },
  { path: 'user', component: UserPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
