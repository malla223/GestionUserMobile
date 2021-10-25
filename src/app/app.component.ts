// app.component.ts
import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {


  currentPageTitle = 'Menu';

  appPages = [
    {
      title: 'Profil',
      url: '/profil',
      icon: 'people'
    },
    {
      title: 'Recherche',
      url: '/search',
      icon: 'search-circle'
    },
    {
      title: 'Re-installé le password',
      url: '/mtd-update',
      icon: 'key'
    },
    {
      title: 'Accueil',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'DECONNEXION',
      url: '/accueil',
      icon: 'close-circle'
    }
  ];

  constructor(
    private platform: Platform,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
    });
  }
}
