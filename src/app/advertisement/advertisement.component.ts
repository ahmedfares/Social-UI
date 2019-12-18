import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { PostService } from '../services/post.service';
import { AdService } from '../services/ad.service';

@Component({
  selector: 'app-advertisement',
  templateUrl: './advertisement.component.html',
  styleUrls: ['./advertisement.component.scss']
})
export class AdvertisementComponent implements OnInit {

  constructor(private userService : UserService, private adService:AdService, private router:Router, private postService: PostService) { }
 
  AdText:string;
  maxAge: any;
  minAge:any;
  inputAddress:string;
  advertisement: any ={};
  selectedFile: any;
  print(){
    this.advertisement.text = this.AdText;
    this.advertisement.targetAddress = this.inputAddress;
    this.advertisement.minAge = this.minAge;
    this.advertisement.maxAge = this.maxAge;
    if(this.selectedFile != null)
      this.advertisement.image = this.selectedFile;
    this.getUser();
    this.PostAdv();
  }

  onFileSelected(event) {
    this.selectedFile = event.target.files[0];
  }

  PostAdv(){
    this.adService.postAd(this.advertisement).subscribe(
      data => {
        this.advertisement = data;
      },
      error => {
        console.log('Error', error);
      }
    );
    this.router.navigate(['/home']);
    window.location.reload();

  }
  getUser(){
    this.userService.getUserData().subscribe(
      data => {
        console.log("POST Request is successful ", data);
        this.advertisement.user = data;
      },
      error => {
        console.log("Error", error);
      }
    );
  }
  ngOnInit() {
    
  }

}
