// authentication.service.ts
import { Injectable } from "@angular/core";
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase } from "@angular/fire/compat/database";
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from "@angular/router";
import * as firebase from "firebase/compat";
import { Observable, of } from "rxjs";
import {switchMap} from 'rxjs/operators';

export class USER {
  nom: string;
  prenom: string;
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthenService {

  user$: Observable<USER>
  user: USER;

  constructor(
    private Auth: AngularFireAuth,
    private ngFirestore: AngularFirestore,
    private afDB : AngularFireDatabase,
    private router: Router
  ) 
  {
    this.user$ = this.Auth.authState
    .pipe(
      switchMap(user => {
        if (user){
          return this.ngFirestore.doc<USER>(`utilisateur/${user.uid}`).valueChanges();
        }else{
          return of(null);
        }
      })
    )
   }

  create(email, password) {
   return this.Auth.createUserWithEmailAndPassword(email, password)
  }

  listUsers() {
   return this.ngFirestore.collection('utilisateur').snapshotChanges();
  }


  //methode de connexion
  loginUser(value) {
    return new Promise<any>((resolve, reject) => {
      this.Auth.signInWithEmailAndPassword(value.email, value.password)
        .then(
          res => resolve(res),
          err => reject(err))
    })
  }

  logoutUser() {
    return new Promise((resolve, reject) => {
      if (this.Auth.currentUser) {
        this.Auth.signOut()
          .then(() => {
            console.log("Deconnecté");
            this.router.navigate(['/connexion']);
          }).catch((error) => {
            reject();
          });
      }
    })
  }
}

