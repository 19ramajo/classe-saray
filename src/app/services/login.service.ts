import {Injectable} from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import {User} from 'firebase';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';


@Injectable()
export class LoginService{

public user: User;

    constructor(public afAuth: AngularFireAuth, public appRouting: Router){
        this.authenticated();
    }


    async loginGoogle(){
        try{
            const result = await this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
            return result;
        }catch(error) {
            console.log(error);
        }
    }

    async login(email: string, password: string){
        try{
            const result = await this.afAuth.auth.signInWithEmailAndPassword(email, password);
            return result;
        }catch(error) {
            console.log(error);
        }
    }

    async register(email: string, password: string){
        try{
            const result = await this.afAuth.auth.createUserWithEmailAndPassword(email, password);
            return result;
        }catch(error) {
            console.log(error);
        }
    }

    async logout(){
        try{
            await this.afAuth.auth.signOut();
        }catch(error) {
            console.log(error);
        }
    }

    getCurrentUser(){

        try{
             return this.afAuth.auth.currentUser;
        }catch(error) {
            console.log(error);
        }
    }

    // Obtener el estado de autenticación
     authenticated() {
        this.afAuth.authState.subscribe(res => {
        if (res && res.uid) {
            const user = this.getCurrentUser();
            localStorage.setItem('User', user.email);
        } else {
            localStorage.setItem('User', 'null');
        }
      });
  }

}