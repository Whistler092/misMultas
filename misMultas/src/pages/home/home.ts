import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, Events, ToastController} from 'ionic-angular';

import { User } from '../../model/user.model';
import { HTTP } from '@ionic-native/http';
import { Storage } from '@ionic/storage';
 
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
    lastName: '',
    penalties : []
  };
  header = {};
  data = ""
  verificarText = "Consultar"

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private http: HTTP,
    public alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private storage: Storage,
    public events: Events
  /*public userService: UserService*/) {
    this.nuevasNotificaciones();
  }

  nuevasNotificaciones(){
    this.events.subscribe('penaltie:new', (notification, time) => {
      // user and time are the same arguments passed in `events.publish(user, time)`
        console.log('penaltie:new', JSON.stringify(notification), 'at', time);
        this.ionViewDidLoad();
        this.presentToast(notification.message);
    });
  }

  presentToast(texto) {
    let toast = this.toastCtrl.create({
      message: texto,
      duration: 3000,
      position: 'top'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }
  
  ionViewDidLoad() {
    
    this.storage.get('user').then((val) => {
      let userJson = JSON.parse(val);
      console.log(JSON.stringify(userJson));

      if(userJson != null){
        this.user = {
          id: userJson.id,
          identification: userJson.identification,
          names: userJson.names,
          lastName: userJson.lastName,
          penalties: userJson.penalties
        };
        this.verificarText = "Volver a Cargar"
        this.verificarCedula(this.user);
      }

    });
  }

  verificarCedula(user: User) {
    let url = 'http://dmparcial2.eastus.cloudapp.azure.com:5000/api/owners/?identification=' + user.identification;
    this.user ={
      id: 0,
      identification: user.identification,
      names: '',
      lastName: '',
      penalties : []
    };
    this.header['Cache-Control'] = 'no-cache';
    this.http.get(
      url,
      {},
      this.header
    ).then(res => {
      console.log(JSON.stringify(res.data));
      let userJson = JSON.parse(res.data)[0];
      console.log(JSON.stringify(userJson));
      this.storage.set('user', JSON.stringify(userJson));

      /*
      [05:18:03]  console.log: {"id":1,"names":"Ramiro Andrés","lastName":"Bedoya Escobar","identification":"1143838715"}
      */
      this.user = {
        id: userJson.id,
        identification: userJson.identification,
        names: userJson.names,
        lastName: userJson.lastName,
        penalties: userJson.penalties,
      };
      console.log(JSON.stringify(this.user));
    }).catch(e => {
      console.log("error");
      console.log(JSON.stringify(e));
      
      console.log(e);
      this.user ={
        id: 0,
        identification: '',
        names: 'Cedula no encontrada',
        lastName: '',
        penalties : []
      };
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

  Alerta(tittle , subTitle) {
    let alert = this.alertCtrl.create({
      title: tittle,
      subTitle:  subTitle,
      buttons: ['OK']
    });
    alert.present();
  }

}
