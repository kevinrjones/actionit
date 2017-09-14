import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationProjectItemComponent } from './navigation-project-item.component';
import { SimpleMessageService } from '../../../shared/message.service';

describe('NavigationProjectItemComponent', () => {
  let component: NavigationProjectItemComponent;
  let fixture: ComponentFixture<NavigationProjectItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationProjectItemComponent ],
      providers: [SimpleMessageService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationProjectItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
