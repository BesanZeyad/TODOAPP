import { HtmlParser } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { __values } from 'tslib';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {

 firstname : string='';
 lastname : string='';
 age : number = 0; 
 gender : string ='';
 email : string = '';
 password : string ='';
 isFirstNameValid : boolean = true;
 isLastNameValid : boolean = true;
 isAgeValid : boolean = true;
 isGenderValid : boolean = true;
 //isEmailValid : boolean = true;
 isPasswordValid : boolean = true;

 registeration() : void{
  console.log(this.firstname);
  localStorage.setItem("firstname",this.firstname);
  this.validation();

 }

 validation():void{
  if(this.firstname.length<=10 && this.firstname.length >= 30){
    this.isFirstNameValid=false;
  }
  if(this.lastname.length<=10 && this.lastname.length >= 30){
    this.isLastNameValid=false;
    alert("First Name Should be string and between 10 and 30 chars");
  }
  if(this.age<=13 && this.age >= 80){
    this.isAgeValid=false;
  }
  if(!(this.gender == 'male' || this.gender == "female") ){
    this.isGenderValid=false;
    }
    if(this.password.length<=6 && this.password.length >= 15){
      this.isPasswordValid=false;
    }
  if(this.isFirstNameValid || this.isLastNameValid || this.isAgeValid || this.isGenderValid){
    console.log("error");
  }
 
  this.isEmail(this.email);
  
 }
   
 isEmail(search:string):void
    {
      try {
        let pattern = new RegExp("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$");
        let valid = pattern.test(search);
        console.log("correct");
      } catch (TypeError) {
        console.log("in correct");
      }
    }
 

}
