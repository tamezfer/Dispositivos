import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FavoritosProvider } from '../../providers/favoritos/favoritos';

/**
 * Generated class for the InfoVideojuegoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-info-videojuego',
  templateUrl: 'info-videojuego.html',
})
export class InfoVideojuegoPage {
  videojuego= {};
  imgs= [];

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public fav: FavoritosProvider) {
      this.videojuego = this.navParams.get('videojuego');

      if(this.videojuego.ad.hasOwnProperty('images')) {
        this.imgs = this.videojuego.ad.images;
      }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoVideojuegoPage');
  }

  favoritos(dispositivo)
  {
    this.fav.addFavoritos(dispositivo);
  }



}
