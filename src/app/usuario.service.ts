import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment'; 
import { Usuario } from './login/Usuario';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  apiUrl : string = environment.baseURL + "/usuario";

  constructor(private http:HttpClient) { }

  cadastrar(usuario:Usuario):Observable<Usuario>{
    return this.http.post(`${this.apiUrl}/inserir`,usuario);
  }


  buscar(login:string):Observable<Usuario>{
    return this.http.get(`${this.apiUrl}/buscar/${login}`);
  }
}
