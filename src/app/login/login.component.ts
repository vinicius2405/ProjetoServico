import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

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


  constructor(private router : Router ) { }

  ngOnInit(): void {
  }


  onSubmit(){
    console.log("ola")
    this.router.navigate(["/home"]);
    
  }


  clicar(event : any){
    event.preventDefault();
    this.cadastrando = true;

  }

}
