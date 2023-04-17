import { ClienteEditComponent } from './componentes/clientes/cliente-edit/cliente-edit.component';
import { ClienteAddComponent } from './componentes/clientes/cliente-add/cliente-add.component';
import { ClientesListComponent } from './componentes/clientes/clientes-list/clientes-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './componentes/auth/register/register.component';
import { LoginComponent } from './componentes/auth/login/login.component';

const routes: Routes = [
  { path: '', component: RegisterComponent },
  { path: 'cliente-add', component: ClienteAddComponent },
  { path: 'cliente-edit/:id', component: ClienteEditComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
