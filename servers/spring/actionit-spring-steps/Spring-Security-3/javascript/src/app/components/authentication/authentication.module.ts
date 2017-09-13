import { NgModule } from '@angular/core'
import { LoginComponent } from './login/login.component';
import { AuthenticationService } from './authentication.service'
import { SharedModule } from '../../shared/shared.module';

@NgModule({
    declarations: [LoginComponent],
    imports: [SharedModule],
    exports: [LoginComponent],
    providers: [AuthenticationService]
})
export class AuthenticationModule {

}