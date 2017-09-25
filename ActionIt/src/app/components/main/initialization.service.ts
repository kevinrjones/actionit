import { Injectable, Inject } from '@angular/core';
import { ProjectConfig } from '../../shared/projectConfig';
import { AppConfig } from '../../shared/projectConfigDef';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class InitializationService {

    url: string;

    constructor(private _http: HttpClient,
                @Inject(AppConfig) config: ProjectConfig) {
        this.url = `${config.rootUrl}${config.initializeUrl}`;
    }

    initialize(): Observable<any> {
        return this._http.get(this.url);
    }
}
