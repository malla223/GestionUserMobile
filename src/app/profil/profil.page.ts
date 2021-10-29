import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AuthenService } from '../services/authen.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {

  user: any;
  userdetails: string;

  constructor(
    private auth: AuthenService,
    private router: Router,
    private authservice: AngularFireAuth
  ) { }

  ngOnInit() 
  {
    this.userDetail().subscribe(res=>{
      if(res !== null){
        this.userdetails = res.email;
      }else{
        this.router.navigate(['/connexion']);
      }
    })
    this.auth.user$.subscribe(user =>{
      this.user = user;
    })
  }


  userDetail(){
    return this.authservice.user;
  }


  logout() {
    this.auth.logoutUser()
      .then(res => {
          console.log(res);
        this.router.navigate(['/connexion']);
      }, err => {
        console.log(err);
      })
  }
}
