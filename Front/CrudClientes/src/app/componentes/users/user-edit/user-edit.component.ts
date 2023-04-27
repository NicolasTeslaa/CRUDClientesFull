import { UsuariosService } from './../../../services/usuarios.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioModel } from 'src/app/models/usuario-model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent {
  usuario: UsuarioModel;
  clienteId: any
  constructor(private usuariosService: UsuariosService, private actRoute: ActivatedRoute, private router: Router) {
    this.usuario = new UsuarioModel()
    this.actRoute.params.subscribe((x) => {
      this.clienteId = x['id']
      this.usuariosService.GetById(this.clienteId).subscribe(resposta => {
        this.usuario = resposta
      });
    });
  }

  validate() {
    this.usuariosService.Update(this.clienteId, this.usuario)
      .toPromise()
      .then((resultOk) => {
        Swal.fire({
          icon: 'success',
          title: 'Usuario atualizado com sucesso',
          showConfirmButton: false,
          timer: 1500
        })
        this.router.navigate(['/users']);
      })
      .catch(error => {
        Swal.fire('Erro ao atualizar usuario!', `${error.message}`, 'error');
      })
    return;
  }
}
