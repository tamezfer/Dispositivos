import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { InfoVideojuegoPage } from '../info-videojuego/info-videojuego';
import { SearchPage } from '../search/search';

/**
 * Generated class for the VideojuegosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-videojuegos',
  templateUrl: 'videojuegos.html',
})
export class VideojuegosPage {
  InfoVideojuegoPage = InfoVideojuegoPage;
  videojuegos = [];
  searchPage = SearchPage;

  constructor(public navCtrl: NavController,
              public http: HttpClient) {
  this.http.get('/v1/nga/api/v1/public/klfst?&category=5060&offset=1&lim=29&lang=es')
  .subscribe(data => {
    console.log(JSON.stringify(data));
    if(data.hasOwnProperty('list_ads')){
      this.videojuegos = data['list_ads'];
    }
  }, error =>{
    console.log(JSON.stringify(error));
  });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VideojuegosPage');
  }

  verVideojuego(videojuego)
  {
    this.navCtrl.push(this.InfoVideojuegoPage, {videojuego: videojuego});
  }

  buscar()
  {
    this.navCtrl.push(this.searchPage, 
      {dispositivos: this.videojuegos});
  }

}
