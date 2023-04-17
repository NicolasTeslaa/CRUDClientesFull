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

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'cliente-add', component: ClienteAddComponent },
  { path: 'cliente-edit/:id', component: ClienteEditComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forget-me', component: ForgetMeComponent },
  { path: 'forget-me-recupera', component: ForgetMeRecuperaComponent },
  { path: 'forget-me-email', component: ForgetMeEmailComponent },
  { path: 'dashboard', component: DashboardComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
