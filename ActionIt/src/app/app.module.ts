import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';
import { ROUTES } from './app.routes';
import { AuthenticationModule } from './components/authentication/authentication.module';
import { HomeComponent } from './components/home/home.component';
import { InitializationService } from './components/main/initialization.service';
import { MainComponent } from './components/main/main.component';
import { NavigationModule } from './components/navigation/navigation.module';
import { TodosComponent } from './components/todos/todos.component';
import { TodoModule } from './components/todos/todos.module';
import { SharedModule } from './shared';
import { AppConfig, PROJECT_CONFIG } from './shared/projectConfigDef';
import { EqualsValidator } from './shared/validators/equalsValidator';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TodosComponent,
    MainComponent,
    EqualsValidator
  ],
  imports: [
    AuthenticationModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    HttpClientModule,
    NavigationModule,
    NgbModule.forRoot(),
    RouterModule,
    RouterModule.forRoot(ROUTES, { useHash: false, preloadingStrategy: PreloadAllModules }),
    SharedModule,
    TodoModule,
    ToastrModule.forRoot()
  ],
  providers: [
    InitializationService,
    {
      provide: AppConfig,
      useValue: PROJECT_CONFIG
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }

