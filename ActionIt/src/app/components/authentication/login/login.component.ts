import { Component, OnInit, HostBinding, OnDestroy } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthenticationService } from '../authentication.service';
import { NgForm } from '@angular/forms';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'ngbd-modal-content',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  implements OnInit, OnDestroy {
  public email: string;
  public password: string;
  public isWaiting: boolean;
  public isError: boolean;
  public message: string;

  ngOnInit(): void {
    console.log('Initialised');
    this.isError = false;
    this.isWaiting = false;
    this.message = 'Unable to log in';
  }

  ngOnDestroy(): void {
    console.log('Destroyed');
  }

  constructor(public activeModal: NgbActiveModal, private authenticationService: AuthenticationService,
    public toastr: ToastsManager) {
  }

  public login(loginForm: NgForm) {
    this.isWaiting = true;

    this.authenticationService
      .authenticate(this.email, this.password)
      .subscribe(
        (result) => {
          this.activeModal.close({ 'Save': true });
          this.isWaiting = false;
          this.toastr.success('Login Sucessful!', 'Success');
        },
        (error) => {
          this.message = 'Unable to login';
          this.isError = true;
          this.isWaiting = false;
          this.toastr.error('Login Failed!', 'Error');
        }
      );
  }
}
