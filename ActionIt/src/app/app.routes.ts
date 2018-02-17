import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home';
import { MainComponent } from './components/main';
import { TodosComponent } from './components/todos';
import { AuthenticationService, LoginComponent } from './components/authentication';

export const ROUTES: Routes = [
    {
        path: 'app',
        component: MainComponent,
        //todo: re-add this
        //canActivate: [AuthenticationService],
        children: [
            {
                path: '',
                component: TodosComponent,
                data: { days: 1, title: 'Today' }
            },
            {
                path: 'all',
                component: TodosComponent,
                data: { days: 0, title: 'All' }

            },
            {
                path: 'today',
                component: TodosComponent,
                data: { days: 1, title: 'Today' }
            },
            {
                path: 'timeList',
                component: TodosComponent,
                data: { days: 7, title: 'Next 7 Days' }
            }
        ]
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: '**',
        redirectTo: 'app',
        pathMatch: 'full'
    },
];
