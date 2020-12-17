import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public loginservice: LoginService, public appRouting: Router) {
    if ( localStorage.getItem('User') !== 'null' ){
      this.appRouting.navigate(['home']);
    }

  }

  LoginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });



  async ngOnInit() {
    /*const user = await this.loginservice.getCurrentUser();
    if(user){
      environment.session.Token=(await user.getIdToken()).toString();
      environment.session.User=user.email;
    }*/
  }

  onGoogleLogin(){
    this.loginservice.loginGoogle()
      .then((data)=>{
        this.loginservice.authenticated();
        this.appRouting.navigate(['/home']);
      })
      .catch((error)=>{
        console.log(error);
        alert('Ha ocurrido un error en el login');
      })
  }


  onLogin(){
    const {email, password} =  this.LoginForm.value;
    this.loginservice.login(email, password);
    this.loginservice.authenticated();
    alert('Login Correcto');
    this.appRouting.navigate(['home']);
  }


}
