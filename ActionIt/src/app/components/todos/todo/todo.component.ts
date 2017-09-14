import { Component, Input } from '@angular/core';
import { ToDo, Priority } from './todo';

@Component({
  selector: 'aiTodo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {

  public editable = false;
  @Input() todo: ToDo;

  public toggleEditable(): void {
    this.editable = !this.editable;
  }

  get title(): string {
    return this.todo.title;
  }

  get dueDate(): string {
    return this.todo.displayDate;
  }

  get borderColor(): string {
    if (this.todo.priority === Priority.High) { return '#ac0000'; }
    if (this.todo.priority === Priority.Medium) { return '#f8801c'; }
    if (this.todo.priority === Priority.Low) { return '#fcc12b'; }
    return '#c0c0c0';
  }

  get backgroundColor(): string {
    if (this.todo.priority === Priority.High) { return '#f5e5e5'; }
    if (this.todo.priority === Priority.Medium) { return '#fef2e8'; }
    if (this.todo.priority === Priority.Low) { return '#fff6e1'; }
    return 'white';

  }
}
