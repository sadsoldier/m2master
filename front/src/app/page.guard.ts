
import { Injectable } from '@angular/core'
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router'
import { Observable } from 'rxjs'

import { Router } from "@angular/router"

import { LoginService } from './login.service'

@Injectable({
  providedIn: 'root'
})
export class PageGuard implements CanActivate {

    constructor(
        private loginService: LoginService,
        private router: Router
    ) {}

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        console.log('canActivate:', this.loginService.isLogin())
        //if (this.loginService.isLogin() == true) {
        //    return true
        //}
        //this.router.navigate(['/login'])
        //return false
        return true
    }

}
