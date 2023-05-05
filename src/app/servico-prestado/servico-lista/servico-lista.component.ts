import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/clientes/cliente';
import { Servico } from '../servico';
import { Route, Router } from '@angular/router';
import { ClienteServiceService } from 'src/app/cliente-service.service';
import { ServicoService } from 'src/app/servico.service';

@Component({
  selector: 'app-servico-lista',
  templateUrl: './servico-lista.component.html',
  styleUrls: ['./servico-lista.component.css']
})
export class ServicoListaComponent implements OnInit {

  cliente?:Cliente[];
  cliente_id?:string;
  servico?:Servico[];

  constructor(private router:Router,private clienteService:ClienteServiceService, private servicoService:ServicoService) { }

  ngOnInit(): void {
    this.clienteService.listar().subscribe(res=>{
      this.cliente = res;
    })

  }


  onSubimit(){
    console.log(this.cliente_id)
    this.servicoService.listarServicoCpf(this.cliente_id as string ).subscribe(res=>{
      this.servico = res;
    })

  }

  adicionar(){
    this.router.navigate(["/servicoInserir"])
  }

}
