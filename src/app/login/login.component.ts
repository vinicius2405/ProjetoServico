import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Usuario } from './Usuario';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  cadastrando? : boolean;
  loginErro?:boolean;
  login?:string;
  senha?:string;
  usuario? : Usuario

  storage : Storage = localStorage;

  constructor(private router : Router, private usuarioService : UsuarioService ) { }

  ngOnInit(): void {
    this.storage.clear();
  }


  onSubmit(){
    if(this.login == null || this.senha == null){
      alert("Preencha os campos antes de enviar")
    }else{
    this.usuarioService.buscar(this.login as string).subscribe(res=>{
      if(res.login == this.login && res.senha == this.senha){
        this.storage.setItem("login",this.login as string);
        this.router.navigate(["home"])
      }else
      alert("Senha incorreta");
    },res=>{
      alert("Login incorreto");
    })
  }
  }


  enviar(){
    if(this.login == null || this.senha == null){
      alert("Preencha os campos antes de enviar")
    }else{
    this.usuario = new Usuario();
    this.usuario.login = this.login;
    this.usuario.senha = this.senha;
    this.usuarioService.cadastrar(this.usuario).subscribe(res=>{
      alert("Usuário inserido com sucesso");
    });
  }
  }

  voltar(){
    this.cadastrando = false
  }

  clicar(event : any){
    event.preventDefault();
    this.cadastrando = true;
  }

}
