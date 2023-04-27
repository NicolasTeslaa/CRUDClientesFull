import { Component } from '@angular/core';
import { UsuarioModel } from 'src/app/models/usuario-model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  usuario = new UsuarioModel();
  constructor(private authService: AuthService) {

  }
  validate() {
    this.authService.loggedUser(this.usuario)
  }
}
