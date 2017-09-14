import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';


import { RouterTestingModule } from '@angular/router/testing';
import { ROUTES } from '../../app.routes';
import { MainComponent } from './main.component';
import { AppComponent } from '../../app.component';
import { TodosComponent } from '../todos/todos.component';
import { HomeComponent } from '../home/home.component';
import { NavigationComponent, TimeItemComponent, NavigationProjectItemComponent, ProjectService } from '../navigation/index';
import { TodoComponent } from '../todos/index';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SimpleMessageService } from '../../shared/message.service';
import { AuthenticationService } from '../authentication/authentication.service';
import { AppConfig } from '../../shared/projectConfigDef';
import { LocalStorageService } from '../../shared/storage.service';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(ROUTES),
        NgbModule.forRoot(),
        HttpClientTestingModule
      ],
      declarations: [
        AppComponent,
        MainComponent,
        TodosComponent,
        HomeComponent,
        NavigationComponent,
        TodoComponent,
        TimeItemComponent,
        NavigationProjectItemComponent
      ],
      providers: [
        SimpleMessageService,
        AuthenticationService,
        {
          provide: 'app.config',
          useValue: {}
        },
        {
          provide: AppConfig,
          useValue: {}
        },
        LocalStorageService,
        ProjectService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
