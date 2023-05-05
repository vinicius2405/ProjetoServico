import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteServiceService } from 'src/app/cliente-service.service';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-cliente-lista',
  templateUrl: './cliente-lista.component.html',
  styleUrls: ['./cliente-lista.component.css']
})
export class ClienteListaComponent implements OnInit {

  msgSucesso? :string 
  msgErro?:string
  clientes? : Cliente[]; 
  constructor(private service : ClienteServiceService, private router:Router) { }

  ngOnInit(): void {
    this.service.listar().subscribe(res=>{
      this.clientes = res;
    })

  }

  excluir(id:any){
    this.service.excluir(id).subscribe(res=>{
      this.msgSucesso = "Cliente excluido com sucesso"
      this.ngOnInit();
    },erro=>{
      this.msgSucesso = undefined
      this.msgErro = erro.error.erroE;
    })
  }

}
