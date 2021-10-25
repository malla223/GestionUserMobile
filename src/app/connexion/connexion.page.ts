
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AuthenService } from '../services/authen.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.page.html',
  styleUrls: ['./connexion.page.scss'],
})
export class ConnexionPage implements OnInit {

  validations_form: FormGroup;
  errorMessage: string = '';

  constructor(

    private navCtrl: NavController,
    private authService: AuthenService,
    private formBuilder: FormBuilder

  ) { }

  ngOnInit() {

    this.validations_form = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required
      ])),
    });
  }


  validation_messages = {
    'username': [
      { type: 'required', message: 'E-mail obligatoire' }
    ],
    'password': [
      { type: 'required', message: 'Password obligatoire' }
    ]
  };


  loginUser(value) {
    this.authService.loginUser(value)
      .then(res => {
        console.log(res);
        this.errorMessage = "";
        this.navCtrl.navigateForward('/accueil');
      }, err => {
        this.errorMessage = err.message;
      })
  }

  goToRegisterPage() {
    this.navCtrl.navigateForward('/register');
  }

}

