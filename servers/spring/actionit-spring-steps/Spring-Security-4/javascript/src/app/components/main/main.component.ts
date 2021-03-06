import { Component, OnDestroy } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { NewtodoComponent } from '../todos/newtodo/newtodo.component';
import { SimpleMessageService } from '../../shared/message.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnDestroy {
    private message: any;
    private subscription: Subscription;

    constructor(private _modalService: NgbModal, private _messageService: SimpleMessageService) {
        this.subscription = this._messageService.getMessage().subscribe((message) => {
            this.message = message;
        });
    }

    public showAddToDoDialog() {
        let modalRef: NgbModalRef = this._modalService.open(NewtodoComponent);
        modalRef.result.then((res) => {
            console.log(res);
        }, () => {}); // empty 'reject' function - workaround for https://github.com/shlomiassaf/angular2-modal/issues/188
    }

    public ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
