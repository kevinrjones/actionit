import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import { Observable } from "rxjs/Observable";

@Injectable()
export class XRequestedWithInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authReq = req.clone({headers: req.headers.set('X-Requested-With', "XMLHttpRequest")});    
    return next.handle(authReq);
    }
}