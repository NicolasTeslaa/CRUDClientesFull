import { AuthService } from 'src/app/services/auth.service';
import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mostrarMenu = false;
  constructor(private el: ElementRef, private authService: AuthService) {
    this.mostraMenu();
  }
  title = 'CrudClientes';
  toogleMenu() {
    let myTag = this.el.nativeElement.querySelector("#sidebarToggle");
    myTag.classList.toggle('sidenav-toggled');
    document.body.classList.toggle('sidenav-toggled');
  }

  mostraMenu() {
    this.authService.mostrarMenuEmitter.subscribe(
      mostrar => this.mostrarMenu = mostrar

    );
  }
  reload(){
    window.location.reload();

  }
}
