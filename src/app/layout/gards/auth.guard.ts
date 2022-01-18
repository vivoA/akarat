import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../login/services/login.service';

@Injectable({
  providedIn: 'root'
})



export class AuthGuard implements CanActivate {

  constructor(private as:LoginService, private router:Router) { }

  
  canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot):Promise<boolean>{
    return new Promise(resolve =>{
      this.as.authUser.subscribe(user => {
        if(user) resolve(true);
        else this.router.navigate(['/login'])
      })
    })
  }
}
