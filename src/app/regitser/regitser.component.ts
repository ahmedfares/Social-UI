import { Component, OnInit } from '@angular/core';
import { SignUpInfo } from '../auth/signup-info';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-regitser',
  templateUrl: './regitser.component.html',
  styleUrls: ['./regitser.component.scss']
})
export class RegitserComponent implements OnInit {

  form: any = {};
  signupInfo: SignUpInfo;
  isSignedUp = false;
  isSignUpFailed = false;
  errorMessage = '';
  
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.form);

    this.signupInfo = new SignUpInfo(
      this.form.name,
      this.form.email,
      this.form.phoneNumber,
      this.form.age,
      this.form.city,
      this.form.password
    );
    
    this.authService.signup(this.signupInfo).subscribe(
      data => {
        console.log(data);
        this.isSignedUp = true;
        this.isSignUpFailed = false;
      }
    );
  }

}
