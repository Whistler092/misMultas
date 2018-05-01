Se debe crear un proyecto en blanco ionic e instalar las siguientes dependencias

$ ionic start misMultas blank

1. Cordova para Android: ionic cordova platform add android
2. Plugin de cordova para conexiones HTTP: cordova plugin add cordova-plugin-advanced-http

$ npm install --save @ionic-native/http



Install gradle
$ brew install gradle

Testeamos que cordoba esté bien instalado con el emulador


La aplicación se debe ejecutar con el comando: ionic cordova emulate android
Nota: También se puede utilizar: ionic cordova run Android y ionic cordova build Android. En ambos casos solo se genera el apk.

LocalStorage
    ionic cordova plugin add cordova-sqlite-storage
    npm install --save @ionic/storage

    https://ionicframework.com/docs/storage/


$ ionic serve 
