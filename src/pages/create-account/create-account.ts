import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MethodProvider } from "../../providers/method/method";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountsPage } from '../accounts/accounts';

/**
 * Generated class for the CreateAccount page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-create-account',
  templateUrl: 'create-account.html',
})

export class CreateAccountPage implements OnInit {
  catalog: any = {};

  credentialsForm: FormGroup;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private formBuilder: FormBuilder,
    public methodService: MethodProvider
  ) {

    this.credentialsForm = this.formBuilder.group({

      name: ['', Validators.required]
    });
  }


  ngOnInit() {
    this.getAccount();
  }

  getAccount() {

    this.methodService.get('catalogs/cards')
      .subscribe(
        data => {
          this.catalog = data;
          console.log('data: ', this.catalog);

        },
        err => console.log('Error', err)
      );
  }

  setAccount() {

    let body = {
      userId:  this.catalog.response._id,
      name: '',
      type: ''
    };


    this.catalog.response.type_cards.forEach(element => {
      if (element.name === this.credentialsForm.value.name) {
        body.name = element.name;
        body.type = element.type;
      }
    });

    if (this.credentialsForm.valid) {
      this.methodService.post('accounts',body)
        .subscribe(
          data => {
            console.log(data)
            this.navCtrl.push(AccountsPage);
          },
          err => console.log('Error', err)
        );
    }

    console.log('Haz la cuenta', body);


  }

}