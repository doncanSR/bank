import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TabsPage } from '../tabs/tabs';
import { MethodProvider } from "../../providers/method/method";
import { SignUpPage } from '../sign-up/sign-up';

const PURE_EMAIL_REGEXP = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
const PASSWORD_REGEXP = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*)([A-Za-z\d]|[^ ]){5,15}$/;

const regexValidators = {
  email: PURE_EMAIL_REGEXP,
  password: PASSWORD_REGEXP
};

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  credentialsForm: FormGroup;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private formBuilder: FormBuilder,
    private methodService: MethodProvider
  ) {

    this.credentialsForm = this.formBuilder.group({

      email: [
        '', Validators.compose([
          Validators.pattern(regexValidators.email),
          Validators.required
        ])
      ],
      password: [
        '', Validators.compose([
          Validators.pattern(regexValidators.password),
          Validators.required
        ])
      ]
    });
  }

  onSignIn() {

    let body = {
      email: this.credentialsForm.value.email,
      password: this.credentialsForm.value.password
    };
    console.log(body);
    if (this.credentialsForm.valid) {

      this.methodService.post('auth/user/authenticate', body)
        .subscribe(
          data => {
            console.log(data)
            this.navCtrl.push(TabsPage);
          },
          err => {
            console.log('Error', err);
          });
    }
  }

  onSignUp() {
    this.navCtrl.push(SignUpPage);
  }

  onForgotPassword() {
    console.log('Forgot password');

  }
}
