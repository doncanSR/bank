import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AccountsPage } from "../pages/accounts/accounts";
import { SettingsPage } from '../pages/settings/settings';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { SignUpPage } from "../pages/sign-up/sign-up";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { InterceptProvider } from '../providers/intercept/intercept';
import { MethodProvider } from '../providers/method/method';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CreateAccountPage } from '../pages/create-account/create-account';

@NgModule({
  declarations: [
    MyApp,
    SettingsPage,
    HomePage,
    TabsPage,
    LoginPage,
    SignUpPage,
    AccountsPage,
    CreateAccountPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SettingsPage,
    HomePage,
    TabsPage,
    LoginPage,
    SignUpPage,
    AccountsPage,
    CreateAccountPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    InterceptProvider,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptProvider,
      multi: true
    },
    MethodProvider
  ]
})
export class AppModule { }
