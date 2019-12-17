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

  claimVisible:boolean = false;
  isBlockedUser:boolean;
  AllPosts: any[] = [];
  claimTxt = "sdsa";
  pageNo = 0;
  constructor(public apiService:ApiService,private router: Router, private token: TokenStorageService) {

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
    this.isBlockedUser = JSON.parse(this.token.getCurrentUser()).blocked;
  }

  searchAllPosts(searchTxt){
    this.apiService.searchAllPosts(this.token.getEmail(),0,searchTxt).subscribe(data => {
      this.AllPosts= data;
    });
  }
  loadMorePosts(){
    this.pageNo++;
    this.apiService.getAllPost(this.token.getEmail(),this.pageNo).subscribe(data => {
      this.AllPosts= this.AllPosts.concat(data) ;
    });
  }

  getAllPosts(){
    this.apiService.getAllPost(this.token.getEmail(),0).subscribe(data => {
      this.AllPosts= data;
    });
  }

  logout() {
    this.token.signOut();
    this.router.navigate(['/login']);
  }
  viewClaim() {
    this.claimVisible = !this.claimVisible;
  }
  addClaim(claimTxt) {
    this.apiService.addClaim(JSON.parse(this.token.getCurrentUser()),claimTxt).subscribe(data => {
      this.claimVisible = !this.claimVisible;
    });
  }
}