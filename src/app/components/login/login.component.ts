import { Component,OnInit } from '@angular/core';
import {FormBuilder,FormControl, FormGroup, Validators} from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../services/user_services/user.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['./login.component.css'],
  host: {

    class:"app-login-cnt"
  }
})
export class LoginComponent {
   loginForm !: FormGroup
   submitted: boolean =false

   userName !: string
   pswd !: string
   ngOnInit():void{

   }
 
   constructor(private formBuilder: FormBuilder, public userService: UserService, public router: Router){
     this.loginForm =this.formBuilder.group({
       email:["",[Validators.required,Validators.email]],
       password:["",[Validators.required,Validators.minLength(6)]],
     });
   }
 
   get f(){
     return this.loginForm.controls
   }
   loginUser(){
     this.submitted=true;
     const{email,password}=this.loginForm.value
     console.log(this.loginForm.value);
     this.userService.loginUser({
      "email":email,
      "password":password
     }).subscribe((result:any)=>{
      console.log(result)
      localStorage.setItem("token",result.id)
      this.router.navigate(["/dashboard/notes"])

    },error=>{console.log(error)})
  } 
}