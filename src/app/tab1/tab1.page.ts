import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  coffees = [];

  constructor() {}

  async ngOnInit() {
    try {
      const res = await fetch(
        'https://random-data-api.com/api/coffee/random_coffee?size=10'
      );
      const coffees = await res.json();

      this.coffees = coffees;
    } catch (err) {
      console.error(err);
    }
  }
}
