import { Component, OnInit } from '@angular/core';
import { ClienteServiceService } from 'src/app/cliente-service.service';
import { Cliente } from 'src/app/clientes/cliente';
import { Servico } from '../servico';
import { ServicoService } from 'src/app/servico.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-servico-form',
  templateUrl: './servico-form.component.html',
  styleUrls: ['./servico-form.component.css']
})
export class ServicoFormComponent implements OnInit {

  sucesso!: boolean;
  erro!: string;
  clientes?: Cliente[];
  servico: Servico;
  constructor(private service: ClienteServiceService, private serviceS:ServicoService, private router : Router) { 
    this.servico = new Servico();
  }

  ngOnInit(): void {
    this.service.listar().subscribe(res=>{
      this.clientes = res;
    })
  }
  onSubmit(){
    console.log(this.servico)
    this.serviceS.salvarServico(this.servico).subscribe(res=>{
      this.servico = new Servico();
      this.sucesso = true;
    },erro=>{
      this.erro = "Erro ao cadastrar o cliente"
    })
  }
}
