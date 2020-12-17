import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';





@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css']
})
export class NotasComponent implements OnInit {

  myNotes = this.infoService.notas;

  note = {Id:null, Titulo:null, Descripcion:null, User:null};
  showForm =false;
  editing = false;

  constructor(public infoService: InfoPaginaService) {
   }

  ngOnInit() {
    this.infoService.cargarNotas();
  }


  addNote(){
    this.editing = false,
    this.showForm = true;
    this.note = {Id:null, Titulo:null, Descripcion:null, User:null};
  }

  cancel(){
    this.showForm = false;
    this.note = {Id:null, Titulo:null, Descripcion:null, User:null};
    this.editing = false;
  }

  createNote(){
    if(this.editing){
      alert('¿Esta seguro que desea editar esta nota?');
      const me = this;
      this.infoService.EditarNotas(this.note);
      me.showForm = false;
      this.editing = false;
      this.note = {Id:null, Titulo:null, Descripcion:null, User:null};
    }else{
      this.note.Id = Date.now();
      this.note.User = localStorage.getItem('User');
      this.infoService.insertarNotas(this.note);
      this.showForm = false;
      this.note = {Id:null, Titulo:null, Descripcion:null, User:null};
    }

  }

  viewNotes(nota){
    this.editing = true;
    this.note = nota;
    this.showForm = true;
  }

  deleteNote(){
    this.infoService.borrarNotas(this.note);
    const me = this;
    me.showForm = false;
    this.note = {Id:null, Titulo:null, Descripcion:null, User:null};
  }



}
