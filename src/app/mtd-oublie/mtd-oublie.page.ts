import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthenService } from '../services/authen.service';

@Component({
  selector: 'app-mtd-oublie',
  templateUrl: './mtd-oublie.page.html',
  styleUrls: ['./mtd-oublie.page.scss'],
})
export class MtdOubliePage implements OnInit {

  constructor(private alertC: AlertController,
    private authService: AuthenService,
    private router: Router) { }

  async alertV(){
    await this.alertC.create({
      header:"Alert",
      message: "Demande Envoyer",
      buttons:[
      {
        text:"Retour"
      }
      ]
    }).then(res => res.present());
  }

  ngOnInit() {
  }
  logout() {
    this.authService.logoutUser()
      .then(res => {
          console.log(res);
        this.router.navigate(['/connexion']);
      }, err => {
        console.log(err);
      })
  }
}
