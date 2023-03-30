import { ClienteModel } from './../../../models/cliente-model';
import { Component } from '@angular/core';
import { ClientesService } from 'src/app/services/clientes.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cliente-add',
  templateUrl: './cliente-add.component.html',
  styleUrls: ['./cliente-add.component.css']
})
export class ClienteAddComponent {
  cliente = new ClienteModel()

  constructor(private router: Router, private clientesService: ClientesService) {
  }

  validate() {
    var form = document.getElementsByClassName('needs-validation')[0] as HTMLFormElement;
    if (form.checkValidity() === false) {
      form.classList.add('was-validated');
      return;
    }

    this.clientesService.Create(this.cliente)
      .toPromise()
      .then((resultOk) => {
        Swal.fire({
          icon: 'success',
          title: 'Cliente adicionado com sucesso',
          showConfirmButton: false,
          timer: 1500
        })
        this.router.navigate(['/']);

      })
      .catch(error => {
        Swal.fire('Erro ao adicionar cliente!', `${error.message}`, 'error');
      })
    return;
  }
}
