
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { NavController, ToastController } from '@ionic/angular';
import { AuthenService } from '../services/authen.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.page.html',
  styleUrls: ['./connexion.page.scss'],
})
export class ConnexionPage implements OnInit {

  validations_form: FormGroup;
  errorMessage: string = '';

  constructor(
    public toastCtrl: ToastController,
    private load: LoadingController,
    private navCtrl: NavController,
    private authService: AuthenService,
    private formBuilder: FormBuilder

  ) { }

  ngOnInit() {

    this.validations_form = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
        Validators.required
      ])),
      password: new FormControl('', Validators.compose([
        Validators.minLength(6),
        Validators.required
      ])),
    });
  }

  validation_messages = {
    'email': [
      { type: 'required', message: 'E-mail obligatoire.' },
      { type: 'pattern', message: 'Entrer un e-mail valide' }
    ],
    'password': [
      { type: 'required', message: 'Mot de passe obligatoire' }
    ]
  };

  async loginUser(value) {
    const load = await this.load.create({
      message: "Connexion en cours..."
    });
    load.present();
    this.authService.loginUser(value)
      .then(res => {
        if(res){
          load.dismiss();
          console.log(res);
          this.errorMessage = "";
          this.navCtrl.navigateForward('/accueil');
        }
        
      }, err => {
        this.errorMessage = err.toastCtrl;
      })
  }


}

