import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { contactusDetails } from '../contactusDetials';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  constructor() { }

  contact:contactusDetails;

  //Assume this is the correct user information
  Testname:String = "matt";
  Testemail:String = "matt@gmail.com";
  Testmessage:String = "Hello World";

  ngOnInit(): void {
    this.contact={
      name:this.Testname,
      email:this.Testemail,
      message:this.Testmessage
    };
  }

  //On Submit
  onSubmit(contactusForm:NgForm) {
    this.validate(contactusForm);
  }

  //Validate that the username and password values are correct (number/letter/empty checks are on the form itself)
  validate(contactusForm:NgForm) {
    alert("Name: " + contactusForm.value.name + " Email: " + contactusForm.value.email + " Message: " + contactusForm.value.message);
  }

}
