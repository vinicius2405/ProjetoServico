import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteFormsComponent } from './clientes/cliente-forms/cliente-forms.component';
import { ClienteListaComponent } from './clientes/cliente-lista/cliente-lista.component';
import { HomePageComponent } from './home/home-page/home-page.component';
import { ServicoFormComponent } from './servico-prestado/servico-form/servico-form.component';
import { ServicoListaComponent } from './servico-prestado/servico-lista/servico-lista.component';
import { LoginComponent } from './login/login.component';
import { TamplateComponent } from './tamplate/tamplate.component';
import { ValidadorGuard } from './guards/validador.guard';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"",component:TamplateComponent, children:[
    {path:"home",component:HomePageComponent},
    {path:"clienteInserir",component:ClienteFormsComponent,canActivate:[ValidadorGuard]},
    {path:"clienteInserir/:id",component:ClienteFormsComponent,canActivate:[ValidadorGuard]},
    {path:"clienteLista",component:ClienteListaComponent,canActivate:[ValidadorGuard]},
    {path:"servicoInserir", component:ServicoFormComponent,canActivate:[ValidadorGuard]},
    {path:"servicoBusca", component:ServicoListaComponent,canActivate:[ValidadorGuard]}

]}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
