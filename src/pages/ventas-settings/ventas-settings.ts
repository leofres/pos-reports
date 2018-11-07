import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the VentasSettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ventas-settings',
  templateUrl: 'ventas-settings.html',
})
export class VentasSettingsPage {
  public timeStarts: String;
  public timeEnds: String;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VentasSettingsPage');
  }

  close() {
    this.viewCtrl.dismiss({
      inicia: this.timeStarts,
      termina: this.timeEnds
    });
  }

}
