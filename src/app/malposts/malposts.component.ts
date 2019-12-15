import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-malposts',
  templateUrl: './malposts.component.html',
  styleUrls: ['./malposts.component.scss']
})
export class MalpostsComponent implements OnInit {

  @ViewChild('followEmail') followEmail: ElementRef;
  posts:any[] = [];
  constructor(public apiService:ApiService,private router: Router) { }

  ngOnInit() {
    this.getAllMalPosts();
  }
  addFollower(text)
  {
    this.addNewFollower(text);
  }
  addNewFollower(followerEmail){
    this.apiService.addNewFollower("ahmed@gmail.com",followerEmail).subscribe(data => {
      if (data != null)
        this.posts.push(data);
      else
        alert('please enter valid mail')
      this.followEmail.nativeElement.value = '';
    });
  }
  removeFollower(user){
    this.apiService.deleteFollower("ahmed@gmail.com",user.email).subscribe(data => {
      this.posts.splice(this.posts.indexOf(user),1);
    });
  }
  getAllMalPosts(){
    this.apiService.getAllMalPosts().subscribe(data => {
      this.posts= data;
      console.log(data);
    });
  }

  enablePost(post){
    this.apiService.enablePost(post).subscribe(data => {
      this.posts.splice(this.posts.indexOf(post),1);
      console.log(data);
    });
  }
  disablePost(post){
    this.apiService.disablePost(post).subscribe(data => {
      this.posts.splice(this.posts.indexOf(post),1);
      console.log(data);
    });
  }
}
