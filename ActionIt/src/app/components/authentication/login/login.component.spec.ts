import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthenticationService } from '../authentication.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AppConfig } from '../../../shared/projectConfigDef';
import { ROUTES } from '../../../app.routes';
import { MainComponent } from '../../main/main.component';
import { TodosComponent } from '../../todos/todos.component';
import { HomeComponent } from '../../home/home.component';
import { NavigationComponent, TimeItemComponent, NavigationProjectItemComponent } from '../../navigation/index';
import { TodoComponent } from '../../todos/index';
import { LocalStorageService } from '../../../shared/storage.service';
import { LoginComponent } from './login.component';
import { RegisterComponent } from '../index';
import { ToastModule } from 'ng2-toastr';
describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [
          LoginComponent,
          RegisterComponent,
          // AppComponent,
          MainComponent,
          TodosComponent,
          HomeComponent,
          NavigationComponent,
          TodoComponent,
          TimeItemComponent,
          NavigationProjectItemComponent
        ],
        imports: [
          RouterTestingModule.withRoutes(ROUTES),
          FormsModule,
          ReactiveFormsModule,
          NgbModule.forRoot(),
          HttpClientTestingModule,
          ToastModule.forRoot()
        ],
        providers: [
          {
            provide: NgbActiveModal, value: {}
          },
          {
            provide: 'app.config',
            useValue: {}
          },
          {
            provide: AppConfig,
            useValue: {}
          },
          AuthenticationService,
          LocalStorageService
        ]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
