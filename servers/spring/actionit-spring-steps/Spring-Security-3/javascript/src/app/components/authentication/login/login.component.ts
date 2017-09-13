import { Component, OnInit, HostBinding } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthenticationService } from '../'

@Component({
  selector: 'ngbd-modal-content',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public userName: string;
  public password: string;

  constructor(public activeModal: NgbActiveModal, private authenticationService: AuthenticationService) {
    console.log('Login component');
  }

  login() {
    console.log(this.userName, this.password)
    this.authenticationService
      .authenticate(this.userName, this.password)
      .subscribe(
        (result) => {
          this.activeModal.close({ 'Save': true })
        }, 
        (error) => this.activeModal.close({ 'Save': false })
      )
  }
}
