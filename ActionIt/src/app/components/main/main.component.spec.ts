import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from '../../app.component';
import { ROUTES } from '../../app.routes';
import { SimpleMessageService } from '../../shared/message.service';
import { AppConfig } from '../../shared/projectConfigDef';
import { LocalStorageService } from '../../shared/storage.service';
import { AuthenticationService } from '../authentication/authentication.service';
import { HomeComponent } from '../home/home.component';
import { NavigationComponent, NavigationProjectItemComponent, ProjectService, TimeItemComponent } from '../navigation/index';
import { TodoComponent } from '../todos/index';
import { TodosComponent } from '../todos/todos.component';
import { InitializationService } from './initialization.service';
import { MainComponent } from './main.component';



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
        ProjectService,
        InitializationService
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
