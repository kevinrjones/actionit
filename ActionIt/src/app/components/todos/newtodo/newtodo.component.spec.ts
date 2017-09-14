import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AppConfig } from '../../../shared/projectConfigDef';
import { ROUTES } from '../../../app.routes';
import { MainComponent } from '../../main/main.component';
import { TodosComponent } from '../../todos/todos.component';
import { HomeComponent } from '../../home/home.component';
import { NavigationComponent, TimeItemComponent, NavigationProjectItemComponent } from '../../navigation/index';
import { TodoComponent } from '../../todos/index';
import { LocalStorageService } from '../../../shared/storage.service';
import { NewtodoComponent } from './newtodo.component';
import { RegisterComponent } from '../../authentication/index';
import { AuthenticationService } from '../../authentication/authentication.service';
import { ToDoService } from '../todos.service';

describe('NewtodoComponent', () => {
  let component: NewtodoComponent;
  let fixture: ComponentFixture<NewtodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewtodoComponent,
        TimeItemComponent,
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
        HttpClientTestingModule
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
        LocalStorageService,
        ToDoService
      ]
    })
    .compileComponents();
}));
  beforeEach(() => {
    fixture = TestBed.createComponent(NewtodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
