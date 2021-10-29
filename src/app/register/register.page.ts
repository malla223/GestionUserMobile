import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenService } from '../services/authen.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ToastController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  saveForm: FormGroup;
  validations_form: FormGroup;
  errorMessage: string = '';
  profile: any;


  constructor( 
    public toastCtrl: ToastController,
  public Auth: AuthenService,
    private formBuilder: FormBuilder,
    private firestore: AngularFirestore,
    private authservice: AngularFireAuth,
    private router: Router,
    ) { }

  ngOnInit()
   {

    this.saveForm = this.formBuilder.group({
      nom: [''],
      prenom: [''],
      email: [''],
      password: ['']
    })

    this.validations_form = this.formBuilder.group({
      nom: new FormControl('', Validators.compose([
        Validators.required
      ])),
      prenom: new FormControl('', Validators.compose([
        Validators.required
      ])),
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

  logout() {
    this.Auth.logoutUser()
      .then(res => {
          console.log(res);
        this.router.navigate(['/connexion']);
      }, err => {
        console.log(err);
      })
  }


  async enregistrer() {
   const toast = await this.toastCtrl.create({
      message: 'Compte crée avec succès',
      duration: 1800
    }).then((toastRes) => {
      console.log(toastRes);
      toastRes.present();
    });
      this.Auth.create(this.saveForm.value['email'], this.saveForm.value['password'])
      .then((resp) => {
        if(resp){
          this.toastCtrl.dismiss();
          this.profile = this.firestore.collection('utilisateur').doc(resp.user.uid).set({
            'nom': this.saveForm.value["nom"], 
            'email': this.saveForm.value["email"], 
            'prenom': this.saveForm.value["prenom"],
            'password': this.saveForm.value["password"]
          })
        }
       this.saveForm.reset();//mettre les champs a zero apres le save
      }).catch((err) => {
        console.log(err)
      });
    }
    
  }