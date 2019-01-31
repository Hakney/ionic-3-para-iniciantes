import { Component, OnInit } from '@angular/core';
import { NavParams, NavController } from '@ionic/angular';
import { TabsPage } from '../tabs/tabs.page';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {
  navCtrl: any;

  constructor(   ) { }

  ngOnInit() {
  }

  goTotabsPage(){
    this.navCtrl.push(TabsPage)
  }

}
