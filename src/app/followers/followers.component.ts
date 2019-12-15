import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.scss']
})
export class FollowersComponent implements OnInit {

  @ViewChild('followEmail') followEmail: ElementRef;
  followers:any[] = [];
  constructor(public apiService:ApiService,private router: Router) { }

  ngOnInit() {
    this.getAllFollowers();
  }
  addFollower(text)
  {
    this.addNewFollower(text);
  }
  addNewFollower(followerEmail){
    this.apiService.addNewFollower("ahmed@gmail.com",followerEmail).subscribe(data => {
      if (data != null)
        this.followers.push(data);
      else
        alert('please enter valid mail')
      this.followEmail.nativeElement.value = '';
    });
  }
  removeFollower(user){
    this.apiService.deleteFollower("ahmed@gmail.com",user.email).subscribe(data => {
      this.followers.splice(this.followers.indexOf(user),1);
    });
  }
  getAllFollowers(){
    this.apiService.getAllFollowers("ahmed@gmail.com").subscribe(data => {
      this.followers= data;
    });
  }

}
