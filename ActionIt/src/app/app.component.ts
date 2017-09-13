import { Component, ViewContainerRef } from '@angular/core';
import { ToDoService } from './components/todos/todos.service';
import { ToastsManager } from "ng2-toastr/src/toast-manager";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ToDoService]
})
export class AppComponent {
  constructor(  public toastr: ToastsManager, vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
  }
}
