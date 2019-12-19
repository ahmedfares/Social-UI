import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { TokenStorageService } from '../auth/token-storage.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  categories: any;
  showUpdate: boolean = true;
  selectedFile: any;
  user: any;
  updatedUser;
  images;
  update() {
    this.showUpdate = !this.showUpdate;
  }

  updateProfile(name,email,city){
    console.log('event : ',event)
    this.showUpdate = !this.showUpdate;
    this.user.name = name;
    this.user.email = email;
    this.user.city = city;
    //if(this.selectedFile != null)
      //this.user.image = this.selectedFile;
    this.updateUserData();
  }
  constructor(private userService: UserService,private token:TokenStorageService) { }


  ngOnInit() {

    if(sessionStorage.getItem("updatedUser"))
      {
        this.user = JSON.parse(sessionStorage.getItem("updatedUser"));
        this.user.imageURL = "../../assets/images/" + this.user.imageURL;
      }
    else
      this.getUserData();
  }

  getUserData() {
    this.user = JSON.parse(this.token.getCurrentUser());
  }

  onFileSelected(event){
    this.images = event.target.files;
  }
  reloadUser(imageURL){
    //this.user.imageURL = (this.user.imageURL)?("../../assets/images/" + this.user.imageURL):"../../assets/images/anonymous.png" ; 
    this.user.imageURL = "../../assets/images/" +imageURL;
    console.log("../../assets/images/" +imageURL);
  }
  updateUserData() {
    console.log('update user data: ', this.user);
    this.userService.updateUserData(this.user,this.images).subscribe(
      data => {
        sessionStorage.setItem("updatedUser",data);
        //this.token.saveCurrentUser(JSON.parse(data));
this.reloadUser(JSON.parse(data).imageURL);
      });
  }
}
