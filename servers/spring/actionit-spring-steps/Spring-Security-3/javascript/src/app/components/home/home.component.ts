import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from '../authentication'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private _modalService: NgbModal) { }

  ngOnInit() {
  }

      public showLoginDialog() {
        let modalRef: NgbModalRef = this._modalService.open(LoginComponent, {'windowClass': 'login-modal'});
        modalRef.result.then((res) => {
            console.log(res);
        }, () => {}); // empty 'reject' function - workaround for https://github.com/shlomiassaf/angular2-modal/issues/188
    }
}
