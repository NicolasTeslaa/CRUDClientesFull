import { Component } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent {
  users: any;
  constructor(private usuariosService: UsuariosService) {
    this.reloadUsuarios();
  }

  reloadUsuarios() {
    this.usuariosService.GetAll().subscribe((s) => {
      this.users = s;
    })
  }

  removerUser() {

  }
}
