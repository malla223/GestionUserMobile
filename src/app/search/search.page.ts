import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { AuthenService } from '../services/authen.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  public list: any[];
  public loadList: any[];
  liste: any[];
  userdetails: string;

  constructor
  ( 
     private authService: AuthenService,
    public firestore: AngularFirestore,
    private router: Router,
    private authservice: AngularFireAuth
  ) 
  { this.listUsers() }


  ngOnInit() 
  {
    this.userDetail().subscribe(res=>{
      if(res !== null){
        this.userdetails = res.email;
      }else{
        this.router.navigate(['/connexion']);
      }
    })
    this.firestore.collection('utilisateur').valueChanges().subscribe(list=>{
      this.list = list;
      this.loadList = list;
    });

  }

  userDetail(){
    return this.authservice.user;
  }
  
  listUsers(){
    this.firestore.collection('utilisateur').valueChanges()
    .subscribe(response => {
      this.liste = response;
    })
  }

  initializeItems(): void{
    this.list = this.loadList;
  }

  filterlist(evt){
    this.initializeItems();

    const searchTerm = evt.srcElement.value;

    if(!searchTerm){
      return;
    }

    this.list = this.list.filter(currentList=>{
      if(currentList.nom && searchTerm){
        if(currentList.nom.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1){
          return true;
        }
        return false;
      }
    });
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
