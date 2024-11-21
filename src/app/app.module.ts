import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './basic/header/header.component';
import { FooterComponent } from './basic/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './administrador/login/login.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgChartsModule } from 'ng2-charts';
import { EventoCardComponent } from './evento/evento-card/evento-card.component';
import { AlojamientoCardComponent } from './alojamiento/alojamiento-card/alojamiento-card.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ReservaComponent } from './reserva/reserva.component';
import { UserloginComponent } from './usuario/userlogin/userlogin.component';
import { ExitosoComponent } from './registro/exitoso/exitoso.component';
import { AdminPageComponent } from './administrador/admin-page/admin-page.component';
import { UserPageComponent } from './usuario/user-page/user-page.component';
import { CommonModule } from '@angular/common';
import { AuthInterceptor } from './helpers/auth.interceptor';
import { UserRegistroComponent } from './usuario/user-registro/user-registro.component';
import { UserAllComponent } from './usuario/user-all/user-all.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    EventoCardComponent,
    AlojamientoCardComponent,
    ContactoComponent,
    ReservaComponent,
    UserloginComponent,
    ExitosoComponent,
    AdminPageComponent,
    UserPageComponent,
    UserRegistroComponent,
    UserAllComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    CommonModule,
    NgChartsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSnackBarModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
