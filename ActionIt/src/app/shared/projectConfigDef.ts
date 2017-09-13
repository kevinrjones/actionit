import { InjectionToken } from '@angular/core';
import { ProjectConfig } from './projectConfig'
import { environment } from '../../environments/environment';

export let AppConfig = new InjectionToken<ProjectConfig>('app.config');

export const PROJECT_CONFIG: ProjectConfig = {
    projectsUrl: environment.projectsUrl,
    todosUrl: environment.todosUrl,
    authenticateUrl: environment.authenticateUrl,
    logoutUrl: environment.logoutUrl,
    rootResourceUrl: environment.rootResourceUrl
};
