import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import * as _ from 'underscore';
import { IProject, Project } from './project';
import { ProjectConfig } from './projectConfig';
import { AppConfig } from './projectConfigDef';

@Injectable()
export class ProjectService {
    private url: string;

    constructor(private _http: HttpClient, @Inject(AppConfig) config: ProjectConfig) {
        this.url = `${config.rootResourceUrl}${config.projectsUrl}`;
    }

    public getProjects(): Observable<IProject[]> {
        return this._http.get<IProject[]>(this.url, { withCredentials: true })
            .map((resp: IProject[]) => _.map(resp, (item) => new Project(item)))
            .do((data) => console.log('ALL: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    public handleError(error: HttpErrorResponse) {
        console.error(error);
        return throwError(error || 'Server error');
    }
}
