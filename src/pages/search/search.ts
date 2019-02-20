import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DispositivoPage } from '../dispositivo/dispositivo';

/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  dispositivos= [];
  items= [];
  dispositivoPage = DispositivoPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.dispositivos = this.navParams.get('dispositivos');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }

  getItems(ev: any)
  {
    console.log(ev.target.value);

    this.items = this.dispositivos.filter( dispositivo => {
      return dispositivo.ad.subject.toLowerCase().includes(ev.target.value.toLowerCase());
    });
  }

  verDispositivo(item)
    {
      this.navCtrl.push(this.dispositivoPage, {dispositivo: item});
    }
}
