import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
})
export class TabsPage {
  constructor(private navCaroller: NavController) {}

  goToShoppingCart() {
    this.navCaroller.navigateForward('/tabs/tab3');
  }
}
