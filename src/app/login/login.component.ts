import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { loginDetails } from '../loginDetails';
import { AuthService } from '../auth.service';
import { Router } from "@angular/router"

//var bcrypt = require('bcryptjs');

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth:AuthService, private router:Router) { }

  login:loginDetails;
  public warning:string;

  //Assume this is the correct user information
  TestUsername:String = "bob";
  TestPassword:String = "myPassword";

  ngOnInit(): void {
    this.login={
      username:this.TestUsername,
      password:this.TestPassword
    };
  }

  //On Submit
  onSubmit(loginForm:NgForm): void {
    //bcrypt.hash(loginForm.value.password, 10).then(hash=>{

    //});
    this.validate(loginForm);
    this.auth.login(this.login).subscribe(
      (success) => {
        // store the returned token in local storage as 'access_token'
        localStorage.setItem('access_token',success.token);
        // redirect to the "vehicles" route
        this.router.navigate(['/vehicles']);
      },
      (err) => {
        this.warning = err.error.message;
      }
    );
  }

  //Validate that the username and password values are correct (number/letter/empty checks are on the form itself)
  validate(loginForm:NgForm) {
    if(loginForm.value.username != this.TestUsername) {
      alert("Wrong Username!");
    } else if (loginForm.value.password != this.TestPassword) {
      alert("Wrong Password!");
    } else {
      alert("Hello " + loginForm.value.username + " your password is: " + loginForm.value.password);
    }
  }

}
