import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as jwt from 'jsonwebtoken';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

// var fakeUser:any = {
//   id: '1111',
//   name: 'Doncan',
//   lastName: 'Sánchez',
//   secondLastName: 'Rico'
// }
export class HomePage {

  public nombre: string;

  constructor(public navCtrl: NavController) {
    let decode:any = {};
    decode = jwt.decode(localStorage.TOKEN);
    this.nombre = decode.firstname;
  }

  // ngOnInit() {
  //   fakeUser;
  // }


  // getUser() {

  // }

}
