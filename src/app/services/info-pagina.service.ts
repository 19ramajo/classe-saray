import { Injectable, NgModule } from '@angular/core';
import { InfoPagina } from '../interfaces/info-pagina.interface';
import { AngularFireDatabase } from 'angularfire2/database';
import { HttpClient} from '@angular/common/http';
import { environment } from '../../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;
  equipo: any[] = [];
  notas: any[] = [];

  constructor(private afDb: AngularFireDatabase, private http: HttpClient) {
    this.cargarInfo(); // json manual
    this.cargarEquipo(); // datos obtenidos desde base de datos firebase
  }

   private cargarInfo() {
    // Leer el archivo json peticion Http
    this.http.get('assets/data/data-pagina.json')
    .subscribe( (resp: InfoPagina) => {
      this.cargada = true;
      this.info = resp;
      });
   }

   cargarEquipo() {
    // Leer el archivo json de firebase
    this.afDb.list('/Equipo').valueChanges().subscribe(
      equipo=>{
      this.equipo = equipo;
      });
   }

   cargarNotas() {
     console.log(localStorage.getItem('User'));
    // Leer el archivo json de firebase
    this.afDb.list('/Notas', ref => ref.orderByChild('User').equalTo(localStorage.getItem('User'))).valueChanges().subscribe(
      ref=>{
      this.notas = ref;
      });
    }


   insertarNotas(nota = {Id:null, Titulo:null, Descripcion:null, User:null}){
     this.afDb.database.ref('Notas/' +nota.Id).set(nota);
   }

   borrarNotas(nota = {Id:null, Titulo:null, Descripcion:null, User:null}){
    this.afDb.database.ref('Notas/' +nota.Id).remove();
  }

  EditarNotas(nota = {Id:null, Titulo:null, Descripcion:null, User:null}){
    this.afDb.database.ref('Notas/' +nota.Id).update(nota);
  }

}
