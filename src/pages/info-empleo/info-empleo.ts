import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FavoritosProvider } from '../../providers/favoritos/favoritos';

/**
 * Generated class for the InfoEmpleoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-info-empleo',
  templateUrl: 'info-empleo.html',
})
export class InfoEmpleoPage {
  empleo = {};
  imgs = [];

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
  public fav: FavoritosProvider) {
      this.empleo = this.navParams.get('empleo');

      if(this.empleo.ad.hasOwnProperty('images')) {
        this.imgs = this.empleo.ad.images;
      }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoEmpleoPage');
  }

  favoritos(dispositivo)
  {
    this.fav.addFavoritos(dispositivo);
  }

}
