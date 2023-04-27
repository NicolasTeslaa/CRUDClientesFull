import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { map } from 'rxjs';
import { UsuariosService } from 'src/app/services/usuarios.service';
import Swal from 'sweetalert2';

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

  removerUser(usuarioId: string) {
    Swal.fire({
      title: 'Deseja remover este usuario?',
      text: 'Esta ação não poderá ser desfeita',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, remover',
    })
      .then((result) => {
        if (result.isConfirmed) {
          this.usuariosService
            .Delete(usuarioId)
            .pipe(map((data) => data))
            .toPromise()
            .then((response) => {
              Swal.fire({
                icon: 'success',
                title: 'Usuario removido com sucesso',
                showConfirmButton: false,
                timer: 3000
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
