import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FavoritosProvider } from '../../providers/favoritos/favoritos';



/**
 * Generated class for the DispositivoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dispositivo',
  templateUrl: 'dispositivo.html',
})
export class DispositivoPage {
  dispositivo= {};
  imgs= [];

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public fav: FavoritosProvider) {
      this.dispositivo = this.navParams.get('dispositivo');

      if(this.dispositivo.ad.hasOwnProperty('images')) {
        this.imgs = this.dispositivo.ad.images;
      }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DispositivoPage');
  }

  favoritos(dispositivo)
  {
    this.fav.addFavoritos(dispositivo);
  }
}
