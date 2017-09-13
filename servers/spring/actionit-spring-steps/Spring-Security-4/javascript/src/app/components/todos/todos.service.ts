import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import * as _ from 'underscore';

import { ToDo, IToDo } from './todo/todo';
import { AppConfig } from '../../shared/projectConfigDef';
import { ProjectConfig } from '../../shared/projectConfig';
import { IProject, Project } from '../../shared/Project';

@Injectable()
export class ToDoService {

    private url: string;

    constructor(private _http: HttpClient, @Inject(AppConfig) config: ProjectConfig) {
        this.url = config.todosUrl;
    }

    public getCurrentToDos(): Observable<IToDo[]> {
        return this._http.get<IToDo[]>(this.url)
            .map((resp: IToDo[]) => _.map(resp, (item) => new ToDo(item)))
            .do((data) => console.log('ALL: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

        addTodo(title: string) : Observable<any> {
        return this._http.post(this.url, {
            "title": title
        })
    }

    public handleError(error: HttpErrorResponse) {
        // console.error(error);
        return Observable.throw(error || 'Server error');
    }
}
