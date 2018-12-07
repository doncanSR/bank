import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpHeaders,
  HttpResponse
} from "@angular/common/http";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import * as jwt from 'jsonwebtoken';

/*
  Generated class for the InterceptProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()

export class InterceptProvider implements HttpInterceptor {

  constructor() {  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    
    if(localStorage.TOKEN){
      request = request.clone({
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'x-access-token': localStorage.TOKEN,
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method',
          'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE',
          'Allow': 'GET, POST, OPTIONS, PUT, DELETE'
        })
      });
    }
    return next.handle(request)
      .pipe(
        tap(event => {
          if (event instanceof HttpResponse){
            if (event.body.token) {
              let decode:any = {};
              decode = jwt.decode(event.body.token);
              console.log(decode);
              localStorage.setItem("TOKEN", event.body.token);
              
              
            }
          }
        },error => {
          console.error(error.success);
          console.error(error.message);
        })
      )
  };

}
