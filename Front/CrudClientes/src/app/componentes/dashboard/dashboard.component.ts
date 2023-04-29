import { Component } from '@angular/core';
import { ClientesService } from 'src/app/services/clientes.service';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  clientes: any;
  usuarios: any;
  constructor(private clientesService: ClientesService, private usuariosService: UsuariosService) {
    this.reloadClientes()
    this.reloadUsuarios()
  }

  reloadClientes() {

    this.clientesService.GetAll().subscribe((s) => {

      this.clientes = s;

    })
  }
  reloadUsuarios() {
    this.usuariosService.GetAll().subscribe((s) => {
      this.usuarios = s;
    })
  }
}
