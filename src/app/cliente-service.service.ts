import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { Cliente } from './clientes/cliente';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClienteServiceService {

  apiURL: string = environment.baseURL + "/cliente";

  constructor(private http:HttpClient) {

   }

   salvar(cliente:Cliente):Observable<Cliente>{
    return this.http.post<Cliente>(`${this.apiURL}/inserir`,cliente);
   }

   listar():Observable<Cliente[]>{
    return this.http.get<Cliente[]>(`${this.apiURL}/listar`);
   }
  
   buscar(id:any):Observable<Cliente>{
    return this.http.get<Cliente>(`${this.apiURL}/buscar/${id}`);
   }

   editar(cliente:Cliente, id:any):Observable<Cliente>{
    return this.http.put<Cliente>(`${this.apiURL}/editar/${id}`,cliente);
   }

   excluir(id : any):Observable<void>{
    return this.http.delete<void>(`${this.apiURL}/deletar/${id}`);
   }
}
