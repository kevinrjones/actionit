import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastModule } from 'ng2-toastr/ng2-toastr';

import { ROUTES } from './app.routes';
import { AppComponent } from './app.component';
import { TodoComponent } from './components/todos/todo/todo.component';
import { HomeComponent } from './components/home/home.component';
import { NewtodoComponent } from './components/todos/newtodo/newtodo.component';
import { TodosComponent } from './components/todos/todos.component';
import { MainComponent } from './components/main/main.component';
import { TimeItemComponent } from './components/navigation/time-item/time-item.component';
import { ProjectConfig } from './shared/projectConfig';
import { AppConfig, PROJECT_CONFIG } from './shared/projectConfigDef';
import { SharedModule } from './shared';
import { NavigationModule } from './components/navigation/navigation.module';
import { AuthenticationModule } from './components/authentication/authentication.module';
import { TodoModule } from './components/todos/todos.module';
import { EqualsValidator } from './shared/validators/equalsValidator'
import { InitializationService } from './components/main/initialization.service';

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
    ToastModule.forRoot(),
    TodoModule
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

