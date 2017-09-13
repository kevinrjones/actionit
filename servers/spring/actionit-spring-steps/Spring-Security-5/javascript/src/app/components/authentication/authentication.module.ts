import { NgModule } from '@angular/core'
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthenticationService } from './authentication.service'
import { SharedModule } from '../../shared/shared.module';

@NgModule({
    declarations: [LoginComponent, RegisterComponent],
    imports: [SharedModule],
    exports: [LoginComponent, RegisterComponent],
    entryComponents: [LoginComponent, RegisterComponent],
    providers: [AuthenticationService]
})
export class AuthenticationModule {

}