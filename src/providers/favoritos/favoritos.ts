import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the FavoritosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FavoritosProvider {
  favoritos = [];

  constructor(public http: HttpClient) {
    console.log('Hello FavoritosProvider Provider');
  }

  addFavoritos(dispositivo)
  {
    this.favoritos.push(dispositivo);
    

    const toast = this.toastCtrl.create({
      message: 'Dispositivo agregado a favoritos',
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }

  getFavoritos()
  {
    return this.favoritos;
  }

}
