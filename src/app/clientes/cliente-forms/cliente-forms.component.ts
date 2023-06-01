import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { ClienteServiceService } from 'src/app/cliente-service.service';
import { Cliente } from '../cliente';


@Component({
  selector: 'app-cliente-forms',
  templateUrl: './cliente-forms.component.html',
  styleUrls: ['./cliente-forms.component.css']
})
export class ClienteFormsComponent implements OnInit {


  cliente!:Cliente;
  sucesso!: boolean;
  erro!: string;
  params?:any;
  constructor(private service:ClienteServiceService, private rota:ActivatedRoute,private router: Router) {
    this.cliente = new Cliente();
   }
  

  ngOnInit(): void {
    this.params = this.rota.snapshot.params["id"]
    console.log(this.params)
    if(this.params){
      this.service.buscar(this.params).subscribe(res=>{
        this.cliente = res;
      })

    }

  }

  onSubmit(){
    if(this.cliente.nome == null || this.cliente.cpf == null ){
      alert("Preencha os campos antes de enviar");
    }else{
    if(this.params){
      this.service.editar(this.cliente,this.params).subscribe(res=>{
        this.router.navigate(["clienteLista"]);
      })
    }else{
      this.service.salvar(this.cliente).subscribe(response=>{  
        this.sucesso = true;
        this.cliente = response;
      },
      error=>{
        this.sucesso = false;
        this.erro = error.error.erroE;
      })

    }
  }
}

voltar(){
  this.router.navigate(["clienteLista"])
}
}
