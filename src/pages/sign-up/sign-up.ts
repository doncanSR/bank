import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HomePage } from "../home/home";
import { HttpHeaders } from "@angular/common/http";
import { LoginPage } from '../login/login';
import { MethodProvider } from "../../providers/method/method";


const PURE_EMAIL_REGEXP = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
const PASSWORD_REGEXP = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*)([A-Za-z\d]|[^ ]){5,15}$/;

const regexValidators = {
  email: PURE_EMAIL_REGEXP,
  password: PASSWORD_REGEXP
};

/**
 * Generated class for the SignUp page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {
  
  credentialsForm: FormGroup;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private formBuilder: FormBuilder,
    public methodService: MethodProvider) {
    
    this.credentialsForm = this.formBuilder.group({

      email: [
        '', Validators.compose([
          Validators.pattern(regexValidators.email),
          Validators.required
        ])
      ],
      first: ['', Validators.required],
      last: ['', Validators.required],
      password: [
        '', Validators.compose([
          Validators.pattern(regexValidators.password),
          Validators.required
        ])
      ]
    });
  }

  onSignUp(){

    let body = {
      email: this.credentialsForm.value.email,
      firstname: this.credentialsForm.value.first,
      lastname: this.credentialsForm.value.last,
      password: this.credentialsForm.value.password

    };

    console.log(body);
    
    if (this.credentialsForm.valid) {
      this.methodService.post('auth/user/create',body)
        .subscribe(
          data => {
            console.log(data)
            this.navCtrl.push(LoginPage);
          },
          err => console.log('Error', err)
        );
    }
    

  }
}
