import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { ROUTES } from '../../../app.routes';
import { AppConfig } from '../../../shared/projectConfigDef';
import { LocalStorageService } from '../../../shared/storage.service';
import { HomeComponent } from '../../home/home.component';
import { MainComponent } from '../../main/main.component';
import { NavigationComponent, NavigationProjectItemComponent, TimeItemComponent } from '../../navigation/index';
import { TodoComponent } from '../../todos/index';
import { TodosComponent } from '../../todos/todos.component';
import { AuthenticationService } from '../authentication.service';
import { RegisterComponent } from '../index';
import { LoginComponent } from './login.component';

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
          ToastrModule.forRoot()
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
