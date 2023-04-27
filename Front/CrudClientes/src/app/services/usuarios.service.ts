import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ClienteModel } from '../models/cliente-model';
import { UsuarioModel } from '../models/usuario-model';

@Injectable({
  providedIn: 'root'
})

export class UsuariosService {
  private baseUrl = environment.ApiUrl
  constructor(private http: HttpClient) { }

  Update(idUsuario: string, usuarioExistente: UsuarioModel): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/Usuario/Update/${idUsuario}`, usuarioExistente);
  }
  GetById(idUsuario: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/Usuario/GetById/${idUsuario}`);
  }
  GetAll(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/Usuario/GetAllUsuarios`);
  }
  Create(novoUsuario: UsuarioModel): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/Usuario/Create`, novoUsuario);
  }
  Delete(idUsuario: string): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/Usuario/Delete/${idUsuario}`);
  }
}
