import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';





@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css']
})
export class NotasComponent implements OnInit {

  constructor(public infoService: InfoPaginaService) { }

  ngOnInit() {
  }

  my_notes = this.infoService.notas;
  
  note = {Id:null, Titulo:null, Descripcion:null};
  show_form =false;
  editing = false;
  
  addNote(){
    this.editing = false,
    this.show_form = true;
    this.note = {Id:null, Titulo:null, Descripcion:null};
  }

  cancel(){
    this.show_form = false;
    this.note = {Id:null, Titulo:null, Descripcion:null};
    this.editing = false;
  }

  createNote(){
    if(this.editing){
      alert('¿Esta seguro que desea editar esta nota?');
      var me = this;
      this.infoService.EditarNotas(this.note);
      me.show_form = false;
      this.editing = false;
      this.note = {Id:null, Titulo:null, Descripcion:null};
    }else{
      this.note.Id = Date.now();
      this.infoService.insertarNotas(this.note);
      this.show_form = false;
      this.note = {Id:null, Titulo:null, Descripcion:null};
    }
    
  }

  viewNotes(nota){
    this.editing = true;
    this.note = nota;
    this.show_form = true;
  }

  deleteNote(){
    this.infoService.borrarNotas(this.note);
    var me = this;
    me.show_form = false;
    this.note = {Id:null, Titulo:null, Descripcion:null};
  }



}
