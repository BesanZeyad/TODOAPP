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
 arr : any =[];


 registeration() : void{
  
  let data = {
    fname : this.firstname,
    lastname : this.lastname,
    age : this.age,
    gender :this.gender,
    email : this.email,
    password :this.password
  }

  this.arr.push(data);
  
  localStorage.setItem("userData",JSON.stringify(this.arr));
  this.firstname ='';
  this.lastname ='';
  this.age = 0; 
  this.gender ='';
  this.email= '';
  this.password ='';
 
 }

 validation():void{
  if(this.firstname.length>=10 && this.firstname.length <= 30){
    this.isFirstNameValid=true;
  }else{
      this.isFirstNameValid=false;
    alert('First Name Should be string and between 10 and 30 chars');

  }
  if(this.lastname.length>=10 && this.lastname.length <= 30){
    this.isLastNameValid=true;
  }else{
    alert('Second Name Should be string and between 10 and 30 chars');
    this.isLastNameValid=false;
  }
  if(this.age>=13 && this.age <= 80){
    this.isAgeValid=true;
  }else{
    alert('Age Should be between 13 and 80');
    this.isAgeValid=false;
  }
  if(!(this.gender == 'male' || this.gender == "female") ){
    this.isGenderValid=false;
     alert('Gender should be male or female');
    }
    if(typeof this.password == 'string' && this.password.length>=6 && this.password.length <= 15){
      this.isPasswordValid=true;
    }else{
      this.isPasswordValid=false;
      alert('Paaword Should be string and between 6 and 15 chars')
    }
  if(this.isFirstNameValid && this.isLastNameValid && this.isAgeValid && this.isGenderValid){
    this.registeration();

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
