import { Component, OnInit, HostBinding } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthenticationService } from '../'

@Component({
  selector: 'ngbd-modal-content',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent  implements OnInit {
  ngOnInit(): void {
    this.isError = false;
    this.isWaiting = false;
    this.message = "Unable to register"
    this.email = ""
  }

  public email: string;
  public firstName: string;
  public lastName: string;
  public password: string;
  public repeatPassword: string;

  public isWaiting: boolean;
  public isError: boolean;
  public message: string;

  constructor(public activeModal: NgbActiveModal, private authenticationService: AuthenticationService) { 
    console.log('Register component');
  }

  register() {
    this.isWaiting = true;

    this.authenticationService
      .register(this.email, 
        this.firstName,
        this.lastName,
        this.password,
        this.repeatPassword)
      .subscribe(
        (result) => {
          this.activeModal.close({ 'Save': true })
          this.isWaiting = false;
        }, 
        (error) => {
          this.message = "Unable to register"
          this.isError = true;
          this.isWaiting = false;
        }
      )
  }
}
