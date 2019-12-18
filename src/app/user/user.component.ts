import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

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
  update() {
    this.showUpdate = !this.showUpdate;
  }

  updateProfile(name,email,password){
    console.log('event : ',event)
    this.showUpdate = !this.showUpdate;
    this.user.name = name;
    this.user.email = email;
    this.user.password = password;
    if(this.selectedFile != null)
      this.user.image = this.selectedFile;
    this.updateUserData();
  }
  constructor(private userService: UserService) { }


  ngOnInit() {

    this.getUserData();


  }

  getUserData() {
    this.userService.getUserData().subscribe(
      data => {
        console.log("POST Request is successful ", data);
        this.user = data;
        console.log(this.user.name);
      },
      error => {
        console.log("Error", error);
      }
    );
  }

  onFileSelected(event){
    this.selectedFile = event.target.files[0];
  }
  updateUserData() {
    console.log('update user data: ', this.user);
    this.userService.updateUserData(this.user).subscribe(
      data => {
        console.log(' updateed User ', data);
        this.user = data;
      },
      error => {
        console.log('Error', error);
      }
    );
  }
}
