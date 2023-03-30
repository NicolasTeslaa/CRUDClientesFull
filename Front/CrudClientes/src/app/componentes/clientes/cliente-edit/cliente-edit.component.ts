import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteModel } from 'src/app/models/cliente-model';
import { ClientesService } from 'src/app/services/clientes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cliente-edit',
  templateUrl: './cliente-edit.component.html',
  styleUrls: ['./cliente-edit.component.css']
})
export class ClienteEditComponent {
  cliente: ClienteModel;
  clienteId: any
  constructor(private clientesService: ClientesService, private actRoute: ActivatedRoute, private router: Router) {
    this.cliente = new ClienteModel()
    this.actRoute.params.subscribe((x) => {
      this.clienteId = x['id']
      this.clientesService.GetById(this.clienteId).subscribe(resposta => {
        this.cliente = resposta
      });
    });
  }


  validate() {
    this.clientesService.Update(this.cliente)
      .toPromise()
      .then(() => {

        Swal.fire('Sucesso', 'Operador cadastrado com sucesso', 'success')
          .then(() => {
            this.router.navigate(['/operadores']);
          })
      })
      .catch(error => {
        Swal.fire('Erro', error.error, 'error');
      })
  }
}
