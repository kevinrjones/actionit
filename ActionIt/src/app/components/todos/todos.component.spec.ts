import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosComponent } from './todos.component';
import { ToDo, TodoComponent } from './index';
import { ToDoService } from './todos.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AppConfig } from '../../shared/projectConfigDef';
import { ROUTES } from '../../app.routes';
import { RouterTestingModule } from '@angular/router/testing';
import { MainComponent } from '../main/main.component';
import { HomeComponent } from '../home/home.component';
import { NavigationComponent, TimeItemComponent, NavigationProjectItemComponent } from '../navigation/index';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let fixture: ComponentFixture<TodosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(ROUTES),
        HttpClientTestingModule],
      declarations: [
        TodosComponent,
        TodoComponent,
        MainComponent,
        HomeComponent,
        NavigationComponent,
        TimeItemComponent,
        NavigationProjectItemComponent
      ],
      providers: [
        ToDoService,
        {
          provide: 'app.config',
          useValue: {}
        },
        {
          provide: AppConfig,
          useValue: {}
        }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
