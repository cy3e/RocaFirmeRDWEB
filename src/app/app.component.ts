import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  
  activePageTitle = 'Inicio'

  public appPages = [
    { 
      title: 'Inicio',
      url: '/folder/home', 
      icon: 'home' 
    },
    
    { 
      title: 'Plataformas', 
      url: '/folder/streams', 
      icon: 'play' 
    },
    
    { 
      title: 'Contacto', 
      url: '/folder/contacts', 
      icon: 'call' 
    },

    { 
      title: 'Nuestro Ministerio', 
      url: '/folder/abbout', 
      icon: 'information' 
    }
  
  ];
  constructor(
    private platform: Platform,
    private statusBar: StatusBar,
    private splashScreen: SplashScreen,
  ) 
  {
    this.initApp();
  }

  initApp()
  {
    this.platform.ready().then (() => 
    {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  // aqui va el routing de las ventanas



}
