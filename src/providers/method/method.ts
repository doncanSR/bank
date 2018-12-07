import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
/*
  Generated class for the MethodProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MethodProvider {
  private api = 'http://mighty-refuge-81707.herokuapp.com/api/';
  
  constructor(private http: HttpClient) {
    
  }
  
  public get(urlService: string){
    
    let getUrl;

    getUrl = this.api + urlService;
    return this.http.get(getUrl);
 
  }

  public post(urlService: string, data: any){

    return this.http.post(this.api + `${urlService}`, data);
  
  }
}

//doncan.sr@hotmail.com