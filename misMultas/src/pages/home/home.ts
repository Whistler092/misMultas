import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { User } from '../../model/user.model';
import { HTTP } from '@ionic-native/http';

/*
import { UserService } from '../../services/user.service'; 
*/
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  user: User = {
    id: 0,
    identification: '',
    names: '',
    lastName: ''
  };
  header = {};
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private http: HTTP
  /*public userService: UserService*/) {

  }

  ionViewDidLoad() {
    console.log('TODO: Si ya está creada la cedula, redireccionar');
  }

  verificarCedula(user: User) {
    let url = 'http://127.0.0.1:5000/api/owners/?identification=' + user.identification;

    this.header['Cache-Control'] = 'no-cache';
    this.http.get(
      url,
      {},
      this.header
    ).then(res => {
      console.log(res);
      /*this.zone.run(() => {
          return JSON.parse(res.data);
      });*/

    }).catch(e => {
      console.log(e);
    });

    /*this.http.get(
      url,
      {},
      {}).map(res => res.json()).subscribe(server_response => {
      this.data = server_response;
    });*/
    /*
      let a= this.userService.verifyIdentification(user);
      console.log(a);
    */
  }

}
