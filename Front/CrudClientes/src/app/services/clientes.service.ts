import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ClienteModel } from '../models/cliente-model';

@Injectable({
  providedIn: 'root'
})

export class ClientesService {
  private baseUrl = environment.ApiUrl
  constructor(private http: HttpClient) { }

  Update(idCliente: string, clienteExistente: ClienteModel): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/Clientes/Update/${idCliente}`, clienteExistente);
  }
  GetById(idCliente: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/Clientes/GetById/${idCliente}`);
  }
  GetAll(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/Clientes/GetAllClientes`);
  }
  Create(novoCliente: ClienteModel): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/Clientes/Create`, novoCliente);
  }
  Delete(idCliente: string): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/Clientes/Delete/${idCliente}`);
  }
}
