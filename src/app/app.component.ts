import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';

/**
 * Define qual a pagina root do app 
 *  
 *
 * @author maycon
 */
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginPage; 

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {     
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

