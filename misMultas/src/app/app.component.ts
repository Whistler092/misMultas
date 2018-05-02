import { Component } from '@angular/core';
import { Platform, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Push, PushObject, PushOptions } from '@ionic-native/push';

import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, 
              statusBar: StatusBar, 
              splashScreen: SplashScreen, 
              private push: Push,
              public events: Events) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      this.PushSetup();
    });
  }

  PushSetup(){
    const options: PushOptions = {
      android: {
        senderID: '1000191276911'
      },
      ios: {
        alert: 'true',
        badge: true,
        sound: 'false'
      }
    };
    const pushObject: PushObject = this.push.init(options);

    pushObject.on('notification')
          .subscribe((notification:any) => {
            /*console.log('recibe a notificación', notification);*/
            console.log('Has recibido una notificación ' + JSON.stringify(notification));
            this.events.publish('penaltie:new', notification, Date.now());

          });
    pushObject.on('registration')
          .subscribe((registration:any) => {
            console.log('registro de dispositivo', registration);
            console.log(JSON.stringify(registration));
            
          });

    pushObject.on('error')
          .subscribe((error:any) => {
            console.log('error con el plugin push', error);
            console.log(JSON.stringify(error));
          });

  }

}

