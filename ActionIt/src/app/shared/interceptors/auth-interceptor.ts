
import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { LocalStorageService } from '../storage.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private router: Router, private storage: LocalStorageService) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        return next
            .handle(req)
            // .do(response => {
            //     if (response instanceof HttpResponse) {
            //         // process response
            //     }
            // })
            .catch(response => {
                if (response instanceof HttpErrorResponse) {
                    if (response.status === 401) {
                        this.router.navigate(['home']);
                        this.storage.removeItem('user');
                    }
                }
                return Observable.throw(response);
            });
    }
}
