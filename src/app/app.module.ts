import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AsideComponent } from './aside/aside.component';
import { FooterComponent } from './footer/footer.component';
import { InfoComponent } from './info/info.component';
import { MenuComponent } from './oficinaVirtual/menu/menu.component';
import { TicketsComponent } from './oficinaVirtual/tickets/tickets.component';
import { PedidosComponent } from './oficinaVirtual/pedidos/pedidos.component';
import { MisDatosComponent } from './oficinaVirtual/mis-datos/mis-datos.component';
import { LoginComponent } from './acceso/login/login.component';
import { RegistroComponent } from './acceso/registro/registro.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AsideComponent,
    InfoComponent,
    FooterComponent,
    MenuComponent,
    TicketsComponent,
    PedidosComponent,
    MisDatosComponent,
    LoginComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
