import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {TokenService} from "../service/token.service";

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private tokenService:TokenService,
              private router:Router) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.tokenService.getToken()){
      console.log('roles---->',this.tokenService.getToken());
      console.log("check====>>>>",JSON.stringify(this.tokenService.getRole())==JSON.stringify(['ADMIN']))
      if (JSON.stringify(this.tokenService.getRole())==JSON.stringify(['ADMIN'])){
        return true;
      }
      else {
        alert('Không có quyền của ADMIN')
        this.router.navigate([''])
      }
    }
    else {
      this.router.navigate(['login'])
    }
  }
}
