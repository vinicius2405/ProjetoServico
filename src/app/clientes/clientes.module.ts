import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteFormsComponent } from './cliente-forms/cliente-forms.component';
import { FormsModule } from '@angular/forms';
import { ClienteListaComponent } from './cliente-lista/cliente-lista.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ClienteFormsComponent,
    ClienteListaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports:[
    ClienteFormsComponent,
    ClienteListaComponent
  ]
})
export class ClientesModule { }
