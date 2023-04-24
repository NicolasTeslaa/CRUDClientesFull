import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteAddComponent } from './componentes/clientes/cliente-add/cliente-add.component';
import { ClienteEditComponent } from './componentes/clientes/cliente-edit/cliente-edit.component';
import { ClientesListComponent } from './componentes/clientes/clientes-list/clientes-list.component';
import { HttpClientModule } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import localePtBr from '@angular/common/locales/pt';
import { RegisterComponent } from './componentes/auth/register/register.component';
import { LoginComponent } from './componentes/auth/login/login.component';
import { ForgetMeComponent } from './componentes/auth/forget-me/forget-me.component';
import { ForgetMeEmailComponent } from './componentes/auth/forget-me-email/forget-me-email.component';
import { ForgetMeRecuperaComponent } from './componentes/auth/forget-me-recupera/forget-me-recupera.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { UsersListComponent } from './componentes/users/users-list/users-list.component';
import { UserAddComponent } from './componentes/users/user-add/user-add.component';
import { UserEditComponent } from './componentes/users/user-edit/user-edit.component';
import { provideEnvironmentNgxMask } from 'ngx-mask';

@NgModule({
  declarations: [
    AppComponent,
    ClienteAddComponent,
    ClienteEditComponent,
    ClientesListComponent,
    RegisterComponent,
    LoginComponent,
    ForgetMeComponent,
    ForgetMeEmailComponent,
    ForgetMeRecuperaComponent,
    DashboardComponent,
    UsersListComponent,
    UserAddComponent,
    UserEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
    ],
  providers: [
    provideEnvironmentNgxMask(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
registerLocaleData(localePtBr);

