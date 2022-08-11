import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 LOGIN_status:boolean=false;
 users : any;
 logemail : string = '';
 logpassword : string ='';
 
  login (): void{
  this.users=JSON.parse(localStorage.getItem('userData') || '[]');
  console.log(this.users);
  for( const user of this.users){
    console.log(user.email);
    console.log(user.password);
    console.log(this.logemail);
    console.log(this.logpassword);
    if((this.logemail===user.email)&&(this.logpassword===user.password))
   {
     this.LOGIN_status=true;
   }
      

  }

  }

}
