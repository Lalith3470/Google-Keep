import { Component,OnInit } from '@angular/core';
import {FormBuilder,FormControl, FormGroup, Validators, ValidatorFn, AbstractControl } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../services/user_services/user.service';
import { last } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  host: {

    class:"app-signup-cnt"
  }
})
export class SignupComponent {

  RegisterForm !: FormGroup
  submitted: boolean = false
  
  ngOnInit():void{

  }

  constructor(private formBuilder: FormBuilder, public userService : UserService){
    this.RegisterForm =this.formBuilder.group({
      firstName:["",[Validators.required,Validators.minLength(3)]],
      lastName:["",[Validators.required,Validators.minLength(3)]],
      userName:["",[Validators.required,Validators.email]],
      password:["",[Validators.required,Validators.minLength(6)]],
      cnf_pswd: ["", Validators.required, this.passwordMatchValidator]
    });
  }

  get f(){
    return this.RegisterForm.controls
  }

  registerUser(){
    this.submitted=true;
    console.log(this.RegisterForm.value)
    const{firstName, lastName, email, password}=this.RegisterForm.value
    this.userService.signupUser({
      "firstName":firstName,
      "lastName":lastName,
      "email": email,
      "password" : password,
      "service" : "advance"
    }).subscribe((result)=>{console.log(result)},(error)=>{console.log(error)})
  }


  passwordMatchValidator: ValidatorFn = (control: AbstractControl): { [key: string]: boolean } | null => {
    const password = control.get('password');
    const confirmPassword = control.get('cnf_pswd');

    if (password && confirmPassword && password.value !== confirmPassword.value) {
      return { 'passwordMismatch': true };
    }

    return null;
  }
}