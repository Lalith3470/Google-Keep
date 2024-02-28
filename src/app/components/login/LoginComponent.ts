import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user_services/user.service';




@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['./login.component.css'],
  host: {
    class: "app-login-cnt"
  }
})
export class LoginComponent {
  loginForm!: FormGroup;
  submitted: boolean = false;

  userName!: string;
  pswd!: string;
  ngOnInit(): void {
  }

  constructor(private formBuilder: FormBuilder, public userService: UserService) {
    this.loginForm = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]],
    });
  }

  get f() {
    return this.loginForm.controls;
  }
  loginUser() {
    this.submitted = true;
    const { email, password } = this.loginForm.value;
    console.log(this.loginForm.value);
    this.userService.loginUser({
      "email": email,
      "password": password
    }).subscribe((result: { id: string; }) => { console.log(result); }, error => { console.log(error); });
  }

}
