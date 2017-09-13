import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToDoService } from '../index'

@Component({
    selector: 'ngbd-modal-content',
    templateUrl: './newtodo.component.html',
    styleUrls: ['./newtodo.component.scss']
})
export class NewtodoComponent {
    public title: string;

    constructor(public activeModal: NgbActiveModal, private todoService: ToDoService) {
        console.log('Newtodo component');
    }

    public addTodo() {
        if (this.title && this.title !== '') {
            this.todoService.addTodo(this.title)
            this.activeModal.close({ Save: true, Title: this.title });
        }
    }
}
