import { EventEmitter, Injectable } from '@angular/core';
import { UsuarioModel } from '../models/usuario-model';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  usuarioAutenticado = false;
  mostrarMenuEmitter = new EventEmitter<boolean>();
  constructor(private router: Router) { }

  loggedUser(usuario: UsuarioModel) {
    if (usuario.email === "usuario@email.com" && usuario.password == "senha") {
      this.usuarioAutenticado = true;
      this.router.navigate(["/dashboard"])
      this.mostrarMenuEmitter.emit(true)
    } else {
      Swal.fire('Email ou senha inválido!', ``, 'error');
      this.mostrarMenuEmitter.emit(false)
    }
  }

  usuarioEstaAutenticado(){
     this.usuarioAutenticado;
  }

}
