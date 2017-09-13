import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../../shared/project.service';
import { IProject } from '../../../shared/Project';

@Component({
    selector: 'aiNavigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

    public projects: IProject[];

    constructor(private projectService: ProjectService) {
    }

    public ngOnInit(): void {
        this.projectService.getProjects().subscribe(
            (projects) => this.projects = projects,
            (error) => console.error(error)
        );
    }

}
