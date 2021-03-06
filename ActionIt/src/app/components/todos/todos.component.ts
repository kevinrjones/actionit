import { Component, OnInit } from '@angular/core';
import { IToDo } from './todo/todo';;
import { ToDoService } from './todos.service';
import * as moment from 'moment';
import * as _ from 'underscore';
import { ActivatedRoute } from '@angular/router';


@Component({
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  public routeData: IExtraRouteData;
  private todos: IToDo[];

  constructor(private _todoService: ToDoService, private _route: ActivatedRoute) {
  }

  public ngOnInit(): void {

    this._route.data.subscribe(data => {
      this.routeData = data as IExtraRouteData;
    });

    this._todoService.getCurrentToDos().subscribe(
      (todos) => this.todos = todos,
      (error) => console.error(error)
    );
  }

  public overdue(): IToDo[] {
    const filtered = _.chain(this.todos)
      .filter((todo) => {
        return todo.dueDate.isBefore(moment().add(this.routeData.days), 'day');
      })
      .sortBy((todo) => todo.dueDate);
    return filtered.value();
  }

  public today(): IToDo[] {
    const filtered = _.filter(this.todos, (todo) => {
      return todo.dueDate.isSame(moment(), 'day');
    });
    return filtered;
  }

  public inDateRange(): IToDo[] {
    const filtered = _.chain(this.todos).filter((todo) => {
      if (this.routeData.days === 0) {
        return todo.dueDate.isAfter(moment(), 'day');
      }
      return todo.dueDate.isSameOrBefore(moment().add(this.routeData.days, 'day'), 'day')
        && todo.dueDate.isAfter(moment(), 'day');
    }).sortBy((todo) => todo.dueDate);
    return filtered.value();
  }

}

interface IExtraRouteData {
  days: number;
  title: string;
}
