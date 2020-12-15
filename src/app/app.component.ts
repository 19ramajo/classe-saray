import { Component } from '@angular/core';
import { InfoPaginaService } from './services/info-pagina.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  cargando = true;



  constructor(public infoPaginaService: InfoPaginaService) {
  this.tiempoCarga();

  }

  tiempoCarga(){
    
    setTimeout(() => {
      this.cargando = false;
    }, 2000);

  }



}
