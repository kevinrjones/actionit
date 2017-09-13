import { NgModule } from '@angular/core'
import { SharedModule } from '../../shared/shared.module';
import { TodoComponent } from './todo/todo.component'
import { NewtodoComponent } from './newtodo/newtodo.component'

@NgModule({
    declarations: [TodoComponent, NewtodoComponent],
    imports: [SharedModule],
    entryComponents: [NewtodoComponent],
    exports: [TodoComponent, NewtodoComponent]
})
export class TodoModule{}