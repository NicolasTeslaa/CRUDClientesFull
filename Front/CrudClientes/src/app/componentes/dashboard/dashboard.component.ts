import { Component } from '@angular/core';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  clientes: any;
  constructor(private clientesService: ClientesService) {
    this.reloadClientes()
  }

  reloadClientes() {
    this.clientesService.GetAll().subscribe((s) => {
      this.clientes = s;
    })
  }
}
