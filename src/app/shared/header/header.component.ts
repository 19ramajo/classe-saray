import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InfoPaginaService } from '../../services/info-pagina.service';
import { environment } from '../../../environments/environment';
import { LoginService } from '../../services/login.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // public user = null;
  public user$: Observable<any> = this.loginService.afAuth.user;

  constructor( public infoPaginaService: InfoPaginaService,
                public loginService: LoginService,
              private appRouting: Router) {}

   ngOnInit() {
  }

  buscarProducto( termino: string ) {

    if( termino.length < 1){
      return;
    }else{
      this.appRouting.navigate(['/search', termino]);
    }
  }

  logout(){
    this.loginService.logout();
    localStorage.setItem('User', 'null');
    this.appRouting.navigate(['/login']);

  }

}
