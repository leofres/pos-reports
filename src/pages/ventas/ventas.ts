import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { VentasSettingsPage } from '../ventas-settings/ventas-settings';

/**
 * Generated class for the VentasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ventas',
  templateUrl: 'ventas.html',
})
export class VentasPage {
  public tickets: any[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private httpClient: HttpClient,
    private popoverCtrl: PopoverController) {
  }

  ionViewDidLoad() {
    this.httpClient.get('http://www.extrapos.mx/gogo/GetTickets.php').toPromise().then((response: any) => {

      this.tickets = response.Tickets;
    });
  }

  presentRadioPopover($event) {
    let popover = this.popoverCtrl.create(VentasSettingsPage);
    popover.present({
      ev: $event
    });

    popover.onDidDismiss((params) => {
      this.getTickets(params.inicia, params.termina);
    });
  }

  getTickets(inicia, termina) {
    return this.httpClient.get('http://www.extrapos.mx/gogo/GetTickets.php', {
      params: {
        minicia: inicia,
        mtermina: termina
      }
    }).toPromise().then((response: any) => {

      this.tickets = response.Tickets;
    }); 
  }

}
