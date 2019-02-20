import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InfoEmpleoPage } from '../info-empleo/info-empleo';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { SearchPage } from '../search/search';

/**
 * Generated class for the EmpleoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-empleo',
  templateUrl: 'empleo.html',
})
export class EmpleoPage {
InfoEmpleoPage = InfoEmpleoPage;
empleos = [];
searchPage = SearchPage;
  constructor(public navCtrl: NavController, 
  public http: HttpClient) {
    this.http.get('/v1/nga/api/v1/public/klfst?&category=6020&lim=29&lang=es')
  .subscribe(data => {
    console.log(JSON.stringify(data));
    if(data.hasOwnProperty('list_ads')){
      this.empleos = data['list_ads'];
    }
  }, error =>{
    console.log(JSON.stringify(error));
  });
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmpleoPage');
  }

  verEmpleo(empleo)
  {
    this.navCtrl.push(this.InfoEmpleoPage, {empleo: empleo});
  }

  buscar()
  {
    this.navCtrl.push(this.searchPage, 
      {dispositivos: this.empleos});
  }
}
