import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioModel } from 'src/app/models/usuario-model';
import { UsuariosService } from 'src/app/services/usuarios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent {
  usuario = new UsuarioModel();
  constructor(private usuariosService: UsuariosService, private router: Router) {

  }
  validate() {
    var form = document.getElementsByClassName('needs-validation')[0] as HTMLFormElement;
    if (form.checkValidity() === false) {
      form.classList.add('was-validated');
      return;
    }

    this.usuariosService.Create(this.usuario)
      .toPromise()
      .then((resultOk) => {
        Swal.fire({
          icon: 'success',
          title: 'Usuario adicionado com sucesso',
          showConfirmButton: false,
          timer: 3000
        })
        this.router.navigate(['/users']);

      })
      .catch(error => {
        Swal.fire('Erro ao adicionar usuario!', `${error.message}`, 'error');
      })
    return;
  }
}
