import { NgModule } from '@angular/core';
import { SimpleMessageService } from './message.service';
import { FormsModule } from '@angular/forms';
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
  declarations: [],
  exports: [FormsModule, CommonModule]
})
export class SharedModule {
}
