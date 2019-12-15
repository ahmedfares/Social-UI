import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthService } from './auth.service';
import { TokenStorageService } from './token-storage.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private token: TokenStorageService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const currentUser = this.token.getToken();
        if (currentUser) {
            // check if route is restricted by role
            let authorities = this.token.getAuthorities();
            for(let authority of authorities){
                if (route.data.roles && route.data.roles.indexOf(authority) !== -1)
                return true;
            }
            // if (route.data.roles && route.data.roles.indexOf(currentUser.role) === -1) {
                // role not authorised so redirect to home page
                this.router.navigate(['/']);
                return false;
            // }

            // authorised so return true
            // return true;
        }

        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    }
}