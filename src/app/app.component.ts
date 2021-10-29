// app.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Platform } from '@ionic/angular';
import { AuthenService } from './services/authen.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
 navigate: any;

  sideMenu(){
    this.navigate = [
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
      title: 'Changer le Password',
      url: '/mtd-update',
      icon: 'key'
    },
    {
      title: 'DECONNEXION',
      url: '/home',
      icon: 'close-circle'
    },
  ]

}

  constructor(
    private authService: AuthenService,
    private platform: Platform,
    public router: Router
  ) {
    this.sideMenu();
  }



  logout() {
    this.authService.logoutUser()
    this.router.navigate(['/home']);
    
  }

}
