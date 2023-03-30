import { ClienteEditComponent } from './componentes/clientes/cliente-edit/cliente-edit.component';
import { ClienteAddComponent } from './componentes/clientes/cliente-add/cliente-add.component';
import { ClientesListComponent } from './componentes/clientes/clientes-list/clientes-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: ClientesListComponent },
  { path: 'cliente-add', component: ClienteAddComponent },
  { path: 'cliente-edit', component: ClienteEditComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
