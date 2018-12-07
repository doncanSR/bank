import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MethodProvider } from "../../providers/method/method";
import { CreateAccountPage } from "../create-account/create-account";

/**
 * Generated class for the Accounts page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-accounts',
  templateUrl: 'accounts.html',
})
export class AccountsPage {
  accounts: any;
  constructor(public navCtrl: NavController,
    private methodService: MethodProvider) {
  }
  ngOnInit() {
    this.getAccount();
  }
  getAccount() {

    this.methodService.get('accounts')
      .subscribe(
        data => {
          this.accounts = data;
          console.log('accounts', this.accounts);
        },
        err => console.log('Error', err)
      );

  }

  createAccount() {
    this.navCtrl.push(CreateAccountPage);
  }

}
