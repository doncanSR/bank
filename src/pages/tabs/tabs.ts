import { Component } from '@angular/core';
import { AccountsPage } from "../accounts/accounts";
import { SettingsPage } from '../settings/settings';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AccountsPage;
  tab3Root = SettingsPage;

  constructor() {

  }
}
