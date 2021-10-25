// authentication.service.ts
import { Injectable } from "@angular/core";
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthenService {

  constructor(
    private Auth: AngularFireAuth
  ) { }

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
          }).catch((error) => {
            reject();
          });
      }
    })
  }

  userDetails() {
    return this.Auth.user
  }
}
