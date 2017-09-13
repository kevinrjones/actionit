
import { Component, OnInit, HostBinding } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthenticationService } from '../'
import { FormControl, FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn } from "@angular/forms/";
import { Registration } from "./registration";

function groupComparisonValidator(control: AbstractControl):
  { [key: string]: boolean } | null {
  let password = control.get('password')
  let repeat = control.get('repeatPassword')

  if (password.pristine || repeat.pristine) {
    return null;
  }

  if (password.value != repeat.value) {
    return { 'comparison': true }
  }
  return null;
}

// Comparison validator without using groups
// pass a reference to the control to validate against
function comparisonValidator(other: AbstractControl): ValidatorFn {
  return (control: AbstractControl):
    { [key: string]: boolean } | null => {
    if (other.value != control.value) {
      return { 'comparison': true }
    }
    return null;
  }
}
@Component({
  selector: 'ngbd-modal-content',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registrationForm: FormGroup;
  registration: Registration;
  emailMessage: string;

  private validationMessages = {
    required: 'Email is required',
    email: 'This does not look an email'
  }

  email = new FormControl('', [Validators.required, Validators.email]);
  firstName = new FormControl('', Validators.required);
  lastName = new FormControl('', Validators.required);
  password = new FormControl('', Validators.required);
  // example using the custom validator without groups
  //  repeatPassword = new FormControl('', [Validators.required, comparisonValidator(this.password)]);
  repeatPassword = new FormControl('', Validators.required);
  passwordGroup: FormGroup

  constructor(public activeModal: NgbActiveModal,
    private authenticationService: AuthenticationService,
    private formBuilder: FormBuilder) {
    console.log('Register component');
  }


  ngOnInit(): void {
    this.passwordGroup = this.formBuilder.group({
      password: this.password,
      repeatPassword: this.repeatPassword
    }, { validator: groupComparisonValidator })

    this.registrationForm = this.formBuilder.group({
      email: this.email,
      firstName: this.firstName,
      lastName: this.lastName,
      passwordGroup: this.passwordGroup
    });
    // this.registrationForm = new FormGroup({
    //   email: this.email,
    //   firstName: this.firstName,
    //   lastName: this.lastName,
    //   password: this.password,
    //   repeatPassword: this.repeatPassword
    // });
    this.isError = false;
    this.isWaiting = false;
    this.message = "Unable to register"
    this.emailMessage = ''

  }


  public isWaiting: boolean;
  public isError: boolean;
  public message: string;

  register() {
    this.isWaiting = true;

    this.authenticationService
      .register(this.email.value,
      this.firstName.value,
      this.lastName.value,
      this.password.value,
      this.repeatPassword.value)
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

  emailIsInvalid(): boolean {
    return this.email.invalid
      && (this.email.dirty || this.email.touched)
      && (this.email.errors.required || this.email.errors.email)
    //return (this.email.dirty || this.email.touched) && this.email.invalid;
  }

  isInvalidOrWaiting(): boolean {
    return this.isWaiting || !this.registrationForm.valid
  }

  setMessage(control: AbstractControl) {
    this.emailMessage = '';
    if((control.touched || control.dirty) && control.errors) {
      this.emailMessage = Object.keys(control.errors).map(k => 
        this.validationMessages[k]
      ).join(' ' );
    }
  }


}

