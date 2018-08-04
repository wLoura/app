import { Component } from '@angular/core';

import { BorrowMoneyPage } from '../borrow-money/borrow-money';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = BorrowMoneyPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
