import { Injectable, Inject } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from "@angular/router";
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ProjectConfig } from '../../shared/projectConfig';
import { AppConfig } from '../../shared/projectConfigDef';
import { User } from '../../models/'
import { HttpHeaders } from "@angular/common/http";
import { LocalStorageService } from '../../shared'


@Injectable()
export class AuthenticationService implements CanActivate {

  private url: string;
  private user: User;


  constructor(private _http: HttpClient,
              @Inject(AppConfig) config: ProjectConfig,
              private router: Router,
              private storage: LocalStorageService) {
    this.url = config.authenticateUrl;
  }

  isAuthenticated(): boolean {
    this.user = JSON.parse(this.storage.getItem("user"))
    return this.user && this.user.authenticated;
  }

  isAuthorized(): boolean {
    return true;
  }

  authenticate(userName: string, password: string): Observable<User> {
    return this._http.get<User>(this.url, {
      headers: new HttpHeaders().set('Authorization', 'Basic ' + btoa(`${userName}:${password}`))
    })
      .map((user: User) => {
        console.log("authenticate: " + this.user)
        if (user.authenticated) {
          this.router.navigate(['app'])
        }
        this.user = user
        this.storage.setItem("user", JSON.stringify(this.user));
        console.log("stored user: " + this.storage.getItem("user"))
      })
      .catch(this.handleError);
  }
  public handleError(error: HttpErrorResponse) {
    if (error.status == 401) {
      this.user = new User();
      return Observable.of(this.user);
    }
    return Observable.throw(error || 'Server error');
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    const canActivate = this.isAuthenticated() && this.isAuthorized();

    this.onCanActivate(canActivate);

    return canActivate;
  }

  onCanActivate(canActivate: boolean) {
    if (!canActivate) {
      this.router.navigate(['home'])
    }
  }
}
