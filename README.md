Se debe crear un proyecto en blanco ionic e instalar las siguientes dependencias

$ ionic start misMultas blank

1. Cordova para Android: ionic cordova platform add android
2. Plugin de cordova para conexiones HTTP: cordova plugin add cordova-plugin-advanced-http

$ npm install --save @ionic-native/http



Install gradle
$ brew install gradle

Testeamos que cordoba esté bien instalado con el emulador
$ cordova run --emulator

La aplicación se debe ejecutar con el comando: ionic cordova emulate android
Nota: También se puede utilizar: ionic cordova run Android y ionic cordova build Android. En ambos casos solo se genera el apk.

LocalStorage
    ionic cordova plugin add cordova-sqlite-storage
    npm install --save @ionic/storage

    https://ionicframework.com/docs/storage/

RUN
    En el browser
        $ ionic serve
    En el emulador
        $ ionic cordova emulate android -lc
    En el Celular
        $ ionic cordova run android --device -lc

NOTIFICACIONES
1. Se debe agregar el plugin de cordova para notificaciones PUSH (ionic cordova plugin add phonegap-plugin-push)
  ionic cordova plugin add phonegap-plugin-push --variable SENDER_ID=1000191276911

  ionic cordova platform add android

2.	Se debe instalar el modulo de notificaciones push  de ionic( npm install --save@ionic-native/push) definiendo el SENDER_ID que tomamos de FireBase


Firmar la APK
Generar la APK
ionic cordova run android --prod --release

keytool -genkey -v -keystore mis-multas-key.jks -keyalg RSA -keysize 2048 -validity 10000 -alias misMultas

jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore mis-multas-key.jks /Users/ramirobedoya/workspace/moviles2/parcial2-ionic/misMultas/platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk misMultas