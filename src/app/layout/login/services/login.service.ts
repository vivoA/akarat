import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  authUser
  constructor(private authSer:AngularFireAuth) { 
    this.authUser=authSer.user
  }

  signin(mail:any, pass:any){
    return this.authSer.signInWithEmailAndPassword(mail,pass)
  }


}
