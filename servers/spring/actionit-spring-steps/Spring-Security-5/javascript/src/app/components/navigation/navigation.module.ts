import { NgModule } from '@angular/core';
import { ProjectService } from '../../shared/project.service'
import { NavigationComponent } from './navigation/navigation.component';
import { NavigationProjectItemComponent } from './navigation-project-item/navigation-project-item.component';
import { TimeItemComponent } from './time-item/time-item.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [NavigationComponent, NavigationProjectItemComponent, TimeItemComponent],
  providers: [ProjectService],
  exports: [NavigationComponent]
})
export class NavigationModule {
}
