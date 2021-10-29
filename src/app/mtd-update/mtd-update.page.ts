import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenService } from '../services/authen.service';

@Component({
  selector: 'app-mtd-update',
  templateUrl: './mtd-update.page.html',
  styleUrls: ['./mtd-update.page.scss'],
})
export class MtdUpdatePage implements OnInit {

  userdetails: string;
  saveForm: FormGroup;
  
  constructor
  (  private auth: AuthenService,
    private router: Router,
    private authservice: AngularFireAuth) { }

  ngOnInit() { this.userDetail().subscribe(res=>{
    if(res !== null){
      this.userdetails = res.email;
    }else{
      this.router.navigate(['/connexion']);
    }
  })
  }

  userDetail(){
    return this.authservice.user;
  }


  /*async resetPassword() {
    if(){

    }
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
     }*/

}
