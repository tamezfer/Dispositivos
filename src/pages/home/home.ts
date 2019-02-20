import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { DispositivoPage } from '../dispositivo/dispositivo';
import { FavoritosPage } from '../favoritos/favoritos';
import { SearchPage } from '../search/search';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  dispositivoPage = DispositivoPage;
  searchPage = SearchPage;
  dispositivos= [];

  constructor(public navCtrl: NavController,
              public http: HttpClient) {
  this.http.get('/v1/nga/api/v1/public/klfst?&category=5020&offset=1&lim=29&lang=es')
  .subscribe(data => {
    console.log(JSON.stringify(data));
    if(data.hasOwnProperty('list_ads')){
      this.dispositivos = data['list_ads'];
    }
  }, error =>{
    console.log(JSON.stringify(error));
  });

  }

  verDispositivo(dispositivo)
  {
    this.navCtrl.push(this.dispositivoPage, {dispositivo: dispositivo});
  }

  buscar()
  {
    this.navCtrl.push(this.searchPage, 
      {dispositivos: this.dispositivos});
  }


}
