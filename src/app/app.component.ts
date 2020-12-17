import { Component } from '@angular/core';
import { InfoPaginaService } from './services/info-pagina.service';
import { LoginService } from './services/login.service';
import { environment } from '../environments/environment';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  cargando = true;


  constructor( public infoPaginaService: InfoPaginaService, private loginService: LoginService) {
    this.tiempoCarga();

  }

  tiempoCarga(){
    setTimeout(() => {
      this.cargando = false;
    }, 3000);

  }



}
