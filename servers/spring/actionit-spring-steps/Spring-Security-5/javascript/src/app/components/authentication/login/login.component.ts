import { Component, OnInit, HostBinding } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthenticationService } from '../'
import { NgForm } from "@angular/forms";

@Component({
  selector: 'ngbd-modal-content',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  implements OnInit {
  ngOnInit(): void {
    this.isError = false;
    this.isWaiting = false;
    this.message = "Unable to log in"
  }

  public email: string;
  public password: string;
  public isWaiting: boolean;
  public isError: boolean;
  public message: string;

  constructor(public activeModal: NgbActiveModal, private authenticationService: AuthenticationService) {
    console.log('Login component');
  }

  public login(loginForm: NgForm) {
    this.isWaiting = true;

    this.authenticationService
      .authenticate(this.email, this.password)
      .subscribe(
        (result) => {
          this.activeModal.close({ 'Save': true })
          this.isWaiting = false;
        }, 
        (error) => {
          this.message = "Unable to login"
          this.isError = true;
          this.isWaiting = false;
        }
      )
  }
}
