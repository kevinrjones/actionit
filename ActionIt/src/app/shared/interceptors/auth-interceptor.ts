
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import { Observable } from 'rxjs/Observable';
import { LocalStorageService } from '../storage.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private router: Router, private storage: LocalStorageService) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        return next
            .handle(req)
            .catch(response => {
                if (response instanceof HttpErrorResponse) {
                    if (response.status === 401) {
                        this.router.navigate(['home']);
                        this.storage.removeItem('user');
                    }
                }
                return throwError(response);
            });
    }
}
