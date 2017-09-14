import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { NavigationComponent } from './navigation.component';
import { TimeItemComponent, ProjectService } from '../../navigation/index';
import { NavigationProjectItemComponent } from '../navigation-project-item/navigation-project-item.component';
import { AppConfig } from '../../../shared/projectConfigDef';

describe('NavigationComponent', () => {
  let component: NavigationComponent;
  let fixture: ComponentFixture<NavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [NavigationComponent,
        TimeItemComponent,
        NavigationProjectItemComponent],
      providers: [ProjectService,
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
    fixture = TestBed.createComponent(NavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
