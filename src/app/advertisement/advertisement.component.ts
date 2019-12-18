import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-advertisement',
  templateUrl: './advertisement.component.html',
  styleUrls: ['./advertisement.component.scss']
})
export class AdvertisementComponent implements OnInit {

  constructor(private userService : UserService, private adService:AdService, private router:Router) { }
 
  PostText:string
  post: any ={};
  selectedFile: any;
  print(){
    this.post.text = this.PostText;
    if(this.selectedFile != null)
      this.post.image = this.selectedFile;
    this.getUser();
    this.Post();
  }

  onFileSelected(event) {
    this.selectedFile = event.target.files[0];
  }

  Post(){
    this.postService.makePost(this.post).subscribe(
      data => {
        this.post = data;
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
        this.post.user = data;
      },
      error => {
        console.log("Error", error);
      }
    );
  }
  ngOnInit() {
    
  }

}
