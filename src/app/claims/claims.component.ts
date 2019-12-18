import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { TokenStorageService } from '../auth/token-storage.service';

@Component({
  selector: 'app-claims',
  templateUrl: './claims.component.html',
  styleUrls: ['./claims.component.scss']
})
export class ClaimsComponent implements OnInit {
  @ViewChild('followEmail') followEmail: ElementRef;
  posts:any[] = [];
  constructor(public apiService:ApiService,private router: Router, private token: TokenStorageService) { }

  ngOnInit() {
    this.getAllClaims();
  }
  addFollower(text)
  {
    this.addNewFollower(text);
  }
  addNewFollower(followerEmail){
    this.apiService.addNewFollower(this.token.getEmail(),followerEmail).subscribe(data => {
      if (data != null)
        this.posts.push(data);
      else
        alert('please enter valid mail')
      this.followEmail.nativeElement.value = '';
    });
  }
  removeFollower(user){
    this.apiService.deleteFollower(this.token.getEmail(),user.email).subscribe(data => {
      this.posts.splice(this.posts.indexOf(user),1);
    });
  }
  getAllClaims(){
    this.apiService.getAllClaims().subscribe(data => {
      this.posts= data;
      console.log(data);
    });
  }

  activate(post){
    this.apiService.activateUser(post).subscribe(data => {
      this.posts.splice(this.posts.indexOf(post),1);
      console.log(data);
    });
  }
  ignore(post){
    this.apiService.ignoreUser(post).subscribe(data => {
      this.posts.splice(this.posts.indexOf(post),1);
      console.log(data);
    });
  }
}
