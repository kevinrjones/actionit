import { Injectable, Inject } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ProjectConfig } from '../../shared/projectConfig';
import { AppConfig } from '../../shared/projectConfigDef';
import { User } from '../../models/';
import { HttpHeaders } from '@angular/common/http';
import { LocalStorageService } from '../../shared';


@Injectable()
export class AuthenticationService implements CanActivate {

  private url: string;
  private logoutUrl: string;
  private user: User;


  constructor(private _http: HttpClient,
    @Inject(AppConfig) config: ProjectConfig,
    private router: Router,
    private storage: LocalStorageService) {
    this.url = config.authenticateUrl;
    this.logoutUrl = config.logoutUrl;
  }

  public isAuthorized(): boolean {
    return true;
  }

  public authenticate(userName: string, password: string): Observable<User> {
    return this._http.get<User>(this.url, {
      headers: new HttpHeaders().set('Authorization', 'Basic ' + btoa(`${userName}:${password}`))
    })
      .map((user: User) => {
        console.log('authenticate: ' + this.user);
        if (user.authenticated) {
          this.router.navigate(['app']);
        }
        this.user = user;
        this.storage.setItem('user', JSON.stringify(this.user));
        console.log('stored user: ' + this.storage.getItem('user'));
      })
      .catch(this.handleError);
  }

  public register(userName: string, firstName: string, lastName: string, password: string, repeatPassword: string): Observable<User> {

    const body = {
      email: userName,
      firstName: firstName,
      lastName: lastName,
      password: password,
      repeatPassword: repeatPassword,
    };

    return this._http.post<User>(this.url, body)
      .map((user: User) => {
        console.log('authenticate: ' + this.user);
        if (user.authenticated) {
          this.router.navigate(['app']);
        }
        this.user = user;
        this.storage.setItem('user', JSON.stringify(this.user));
        console.log('stored user: ' + this.storage.getItem('user'));
      })
      .catch(this.handleError);
  }

  public logout() {
    console.log('logout: ' + this.logoutUrl);
    this._http.post(this.logoutUrl, {})
      .subscribe(data => {
        console.log('logout: ' + data);
        this.storage.clear();
        this.router.navigate(['./home']);
      },
      error => this.handleError);
  }

  public handleError(error: HttpErrorResponse) {
    // I'm sure I had this here for a reason
    // if (error.status == 401) {
    //   this.user = new User();
    //   return Observable.of(this.user);
    // }
    return Observable.throw(error || 'Server error');
  }

  private isAuthenticated(): boolean {
    this.user = JSON.parse(this.storage.getItem('user'));
    return this.user && this.user.authenticated;
  }

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    const canActivate = this.isAuthenticated() && this.isAuthorized();

    this.onCanActivate(canActivate);

    return canActivate;
  }

  private onCanActivate(canActivate: boolean) {
    if (!canActivate) {
      this.router.navigate(['home']);
    }
  }
}
