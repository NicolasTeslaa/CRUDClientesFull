import { ClientesService } from 'src/app/services/clientes.service';
import Swal from 'sweetalert2';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { map, Subject } from 'rxjs';

@Component({
  selector: 'app-clientes-list',
  templateUrl: './clientes-list.component.html',
  styleUrls: ['./clientes-list.component.css']
})
export class ClientesListComponent {
  clientes: any;
  constructor(private clientesService: ClientesService, private router: Router) {
    this.reloadClientes()
  }

  reloadClientes() {
    this.clientesService.GetAll().subscribe((s) => {
      this.clientes = s;
    })
  }

  removerCliente(clienteId: string) {
    Swal.fire({
      title: 'Deseja remover este cliente?',
      text: 'Esta ação não poderá ser desfeita',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, remover',
    })
      .then((result) => {
        if (result.isConfirmed) {
          this.clientesService
            .Delete(clienteId)
            .pipe(map((data) => data))
            .toPromise()
            .then((response) => {
              Swal.fire({
                icon: 'success',
                title: 'Cliente removido com sucesso',
                showConfirmButton: false,
                timer: 1500
              })
              window.location.reload();

            })

            .catch((error: HttpErrorResponse) => {
              Swal.fire(
                'Erro',
                `Erro desconhecido ${error.message}`,
                'error'
              );
            });
        }
      });
  }
}
