import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Servico } from './servico-prestado/servico';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment'
import { Cliente } from './clientes/cliente';

@Injectable({
  providedIn: 'root'
})
export class ServicoService {

  constructor(private http:HttpClient) { }

  apiURL : string = environment.baseURL + "/servico";

salvarServico(servico:Servico):Observable<Servico>{
  return this.http.post<Servico>(`${this.apiURL}/inserir`,servico);
}


listarServicoCpf(cpf:string):Observable<Servico[]>{
  return this.http.get<Servico[]>(`${this.apiURL}/listarCpf/${cpf}`)
}
}
