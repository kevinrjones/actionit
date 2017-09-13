import { NgModule } from '@angular/core';
import { SimpleMessageService } from './message.service';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'; 
import { ColorDirective }  from './validators/color.component'

import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { XRequestedWithInterceptor } from './interceptors/xrequested-with-interceptor'
import { LocalStorageService } from "./storage.service";
import { AuthInterceptor } from './interceptors/auth-interceptor'

@NgModule({
  providers: [SimpleMessageService, LocalStorageService,
     {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: XRequestedWithInterceptor,
      multi: true,
    }
  ],
  imports: [],
  declarations: [
    ColorDirective
  ],
  exports: [FormsModule, CommonModule, ReactiveFormsModule, ColorDirective]
})
export class SharedModule {
}
