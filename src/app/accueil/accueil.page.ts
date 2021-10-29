// dashboard.page.ts
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { LoadingController, NavController } from '@ionic/angular';
import { AuthenService } from '../services/authen.service';


@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
})
export class AccueilPage implements OnInit {

  errorMessage: string ="";
  liste: any[];

  constructor(
    private load: LoadingController,
    private navCtrl: NavController,
    private authService: AuthenService,
    public firestore: AngularFirestore,
    private router: Router
  ) {this.listUsers()}

  ngOnInit() {}

  //recuperation de la liste
  listUsers(){
    this.firestore.collection('utilisateur').valueChanges()
    .subscribe(response => {
      this.liste = response;
    })
  }


  //methode deconnexion
 logout() {
    this.authService.logoutUser()
      .then(res => {
      }, err => {
        console.log(err);
      })
  }
  }
 

