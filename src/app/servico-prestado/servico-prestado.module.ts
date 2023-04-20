
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicoListaComponent } from './servico-lista/servico-lista.component';
import { ServicoFormComponent } from './servico-form/servico-form.component';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    ServicoListaComponent,
    ServicoFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports:[
    ServicoFormComponent,
    ServicoListaComponent
  ]
})
export class ServicoPrestadoModule { }
