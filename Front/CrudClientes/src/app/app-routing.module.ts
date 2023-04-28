import { ClienteEditComponent } from './componentes/clientes/cliente-edit/cliente-edit.component';
import { ClienteAddComponent } from './componentes/clientes/cliente-add/cliente-add.component';
import { ClientesListComponent } from './componentes/clientes/clientes-list/clientes-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './componentes/auth/register/register.component';
import { LoginComponent } from './componentes/auth/login/login.component';
import { ForgetMeComponent } from './componentes/auth/forget-me/forget-me.component';
import { ForgetMeEmailComponent } from './componentes/auth/forget-me-email/forget-me-email.component';
import { ForgetMeRecuperaComponent } from './componentes/auth/forget-me-recupera/forget-me-recupera.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { UserAddComponent } from './componentes/users/user-add/user-add.component';
import { UsersListComponent } from './componentes/users/users-list/users-list.component';
import { UserEditComponent } from './componentes/users/user-edit/user-edit.component';
import { AuthGuard } from './services/guard/auth-guard';

const routes: Routes = [
  { path: '', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'cliente-add', component: ClienteAddComponent, canActivate: [AuthGuard] },
  { path: 'clientes', component: ClientesListComponent, canActivate: [AuthGuard] },
  { path: 'cliente-edit/:id', component: ClienteEditComponent, canActivate: [AuthGuard] },
  { path: 'user-add', component: UserAddComponent, canActivate: [AuthGuard] },
  { path: 'users', component: UsersListComponent, canActivate: [AuthGuard] },
  { path: 'user-edit/:id', component: UserEditComponent, canActivate: [AuthGuard] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forget-me', component: ForgetMeComponent },
  { path: 'forget-me-recupera', component: ForgetMeRecuperaComponent },
  { path: 'forget-me-email', component: ForgetMeEmailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
