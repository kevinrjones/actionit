import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import * as _ from 'underscore';
import { ProjectConfig } from './projectConfig';
import { AppConfig } from './projectConfigDef';
import { IProject, Project } from './Project';

@Injectable()
export class ProjectService {
    private url: string;

    constructor(private _http: HttpClient, @Inject(AppConfig) config: ProjectConfig) {
        this.url = config.projectsUrl;
    }

    public getProjects(): Observable<IProject[]> {
        return this._http.get<IProject[]>(this.url)
            .map((resp: IProject[]) => _.map(resp, (item) => new Project(item)))
            .do((data) => console.log('ALL: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    public handleError(error: HttpErrorResponse) {
        console.error(error);
        return Observable.throw(error || 'Server error');
    }
}
