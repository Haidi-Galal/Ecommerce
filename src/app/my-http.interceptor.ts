import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class MyHttpInterceptor implements HttpInterceptor {

  constructor() {}
   headers :any ={
    token:localStorage.getItem('etoken')
   }
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    request= request.clone(
     {
      setHeaders:this.headers
     }
     );
   
   
    return next.handle(request);
  }
}
