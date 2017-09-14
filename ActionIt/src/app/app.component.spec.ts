import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';

import { RouterTestingModule } from '@angular/router/testing';
import { ROUTES } from './app.routes';
import { MainComponent } from './components/main/main.component';
import { TodosComponent } from './components/todos/todos.component';
import { HomeComponent } from './components/home/home.component';
import { NavigationComponent, TimeItemComponent, NavigationProjectItemComponent } from './components/navigation/index';
import { TodoComponent } from './components/todos/index';
import { ToastModule } from 'ng2-toastr';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(ROUTES),
        ToastModule.forRoot()],
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
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  // it(`should have as title 'app'`, async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('app');
  // }));

  // it('should render title in a h1 tag', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  // }));
});
