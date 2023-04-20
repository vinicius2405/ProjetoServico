import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteFormsComponent } from './clientes/cliente-forms/cliente-forms.component';
import { ClienteListaComponent } from './clientes/cliente-lista/cliente-lista.component';
import { HomePageComponent } from './home/home-page/home-page.component';
import { ServicoFormComponent } from './servico-prestado/servico-form/servico-form.component';

const routes: Routes = [
  {path:"home",component:HomePageComponent},
  {path:"clienteInserir",component:ClienteFormsComponent},
  {path:"clienteInserir/:id",component:ClienteFormsComponent},
  {path:"clienteLista",component:ClienteListaComponent},
  {path:"servicoInserir", component:ServicoFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
