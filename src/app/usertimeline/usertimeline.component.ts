import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usertimeline',
  templateUrl: './usertimeline.component.html',
  styleUrls: ['./usertimeline.component.scss']
})
export class UsertimelineComponent implements OnInit {
  UserPosts: any[] = [];
  pageNo = 0;
  userEmail = "";
  constructor(public apiService:ApiService,private router: Router,private activatedRouter: ActivatedRoute) {

   }

   enterSearchTxt(input,text) {
     if(input.key == "Enter")
      {
        if(text == "")
          this.getUserPosts();
        else
          this.searchUserPosts(text);
      }
   }

  ngOnInit() {
    this.userEmail = this.activatedRouter.snapshot.paramMap.get("email");
      this.getUserPosts();
  }

  searchUserPosts(searchTxt){
    this.apiService.searchUserPosts(this.userEmail,0,searchTxt).subscribe(data => {
      this.UserPosts= data;
    });
  }
  loadMorePosts(){
    this.pageNo++;
    this.apiService.getUserPost(this.userEmail,this.pageNo).subscribe(data => {
      this.UserPosts= this.UserPosts.concat(data) ;
    });
  }

  getUserPosts(){
    this.apiService.getUserPost(this.userEmail,0).subscribe(data => {
      this.UserPosts= data;
    });
  }
  
}
