import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BorrowMoneyPage } from './borrow-money';

@NgModule({
  declarations: [
    BorrowMoneyPage,
  ],
  imports: [
    IonicPageModule.forChild(BorrowMoneyPage),
  ],
})
export class BorrowMoneyPageModule {}
