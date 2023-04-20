import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteServiceService } from './cliente-service.service';
import { ClientesModule } from './clientes/clientes.module';
import { HomeModule } from './home/home.module';
import { HttpClientModule } from '@angular/common/http';
import { ServicoPrestadoModule } from './servico-prestado/servico-prestado.module';
import { ServicoService } from './servico.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ClientesModule,
    ServicoPrestadoModule,
    HomeModule
  ],
  providers: [
    ClienteServiceService,
    ServicoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
