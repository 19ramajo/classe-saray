import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

   registerForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    password2: new FormControl('')
  });

  passIgual = false;


  constructor(private loginService: LoginService, public appRouting: Router) { }

  ngOnInit() {
  }

  onRegister(){
    this.checkPass();
    if(this.passIgual){
      const {email, password} = this.registerForm.value;
      this.loginService.register(email, password);
      alert('Registro creado correctamente');
      this.appRouting.navigate(['/home']);
    }else{
      this.registerForm.controls.password.reset();
      this.registerForm.controls.password2.reset();
      alert('Las contraseñas no coinciden, vuelva a introducirlas');
    }
  }

  checkPass(){
    const {password, password2, email} = this.registerForm.value;
    if(email != null || password != null || password2 != null){
      if(password === password2){
        this.passIgual = true;
      }
    }else {
        alert('Debe completar todo el formulario.');
      }
    }
}


