import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { TokenStorageService } from '../auth/token-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  AllPosts: any[] = [];
  pageNo = 0;
  constructor(public apiService:ApiService,private router: Router) {

   }

   enterSearchTxt(input,text) {
     if(input.key == "Enter")
      {
        if(text == "")
          this.getAllPosts();
        else
          this.searchAllPosts(text);
      }
   }

  ngOnInit() {
    this.getAllPosts();
  }

  searchAllPosts(searchTxt){
    this.apiService.searchAllPosts("ahmed@gmail.com",0,searchTxt).subscribe(data => {
      this.AllPosts= data;
    });
  }
  loadMorePosts(){
    this.pageNo++;
    this.apiService.getAllPost("ahmed@gmail.com",this.pageNo).subscribe(data => {
      this.AllPosts= this.AllPosts.concat(data) ;
    });
  }

  getAllPosts(){
    this.apiService.getAllPost("ahmed@gmail.com",0).subscribe(data => {
      this.AllPosts= data;
    });
  }
  
}