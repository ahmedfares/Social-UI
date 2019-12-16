import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { TokenStorageService } from '../auth/token-storage.service';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.scss']
})
export class FollowersComponent implements OnInit {

  @ViewChild('followEmail') followEmail: ElementRef;
  followers:any[] = [];
  constructor(public apiService:ApiService,private router: Router, private token: TokenStorageService) { }

  ngOnInit() {
    this.getAllFollowers();
  }
  addFollower(text)
  {
    this.addNewFollower(text);
  }
  addNewFollower(followerEmail){
    this.apiService.addNewFollower(this.token.getEmail(),followerEmail).subscribe(data => {
      if (data != null)
        this.followers.push(data);
      else
        alert('please enter valid mail')
      this.followEmail.nativeElement.value = '';
    });
  }
  removeFollower(user){
    this.apiService.deleteFollower(this.token.getEmail(),user.email).subscribe(data => {
      this.followers.splice(this.followers.indexOf(user),1);
    });
  }
  getAllFollowers(){
    this.apiService.getAllFollowers(this.token.getEmail()).subscribe(data => {
      this.followers= data;
    });
  }

}
