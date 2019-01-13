import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import * as _ from 'underscore';
import { ProjectConfig } from '../../shared/projectConfig';
import { AppConfig } from '../../shared/projectConfigDef';
import { IToDo, ToDo } from './todo/todo';


@Injectable()
export class ToDoService {

    private url: string;

    constructor(private _http: HttpClient, @Inject(AppConfig) config: ProjectConfig) {
        this.url = `${config.rootResourceUrl}${config.todosUrl}`;
    }

    public getCurrentToDos(): Observable<IToDo[]> {
        return this._http.get<IToDo[]>(this.url, { withCredentials: true })
            .map((resp: IToDo[]) => _.map(resp, (item) => new ToDo(item)))
            .do((data) => console.log('ALL: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

        addTodo(title: string): Observable<any> {
        return this._http.post(this.url, {
            'title': title
        });
    }

    public handleError(error: HttpErrorResponse) {
        // console.error(error);
        return throwError(error || 'Server error');
    }
}
