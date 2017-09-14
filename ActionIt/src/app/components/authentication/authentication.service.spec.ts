import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { AuthenticationService } from './authentication.service';

import { AppConfig, PROJECT_CONFIG } from '../../shared/projectConfigDef';
import { RouterTestingModule } from '@angular/router/testing';
import { ROUTES } from '../../app.routes';
import { MainComponent } from '../../components/main/main.component';
import { TodosComponent } from '../../components/todos/todos.component';
import { HomeComponent } from '../../components/home/home.component';
import { NavigationComponent, TimeItemComponent, NavigationProjectItemComponent } from '../../components/navigation/index';
import { TodoComponent } from '../../components/todos/index';
import { LocalStorageService } from '../../shared';

describe('AuthenticationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(ROUTES),
        HttpClientTestingModule
      ],
      providers: [
        AuthenticationService,
        LocalStorageService,
        {
          provide: 'app.config',
          useValue: {}
        },
        {
          provide: AppConfig,
          useValue: {}
        }
      ],
      declarations: [
         MainComponent,
         TodosComponent,
         HomeComponent,
         NavigationComponent,
         TodoComponent,
         TimeItemComponent,
        NavigationProjectItemComponent
      ]
    });
  });

  it('should be created', inject([AuthenticationService], (service: AuthenticationService) => {
    expect(service).toBeTruthy();
  }));
});
