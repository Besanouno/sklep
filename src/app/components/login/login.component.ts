import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AuthService} from '../../firebase/auth.service';
import {Credentials} from '../../firebase/auth.service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  public registerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: ['']
    });

    this.registerForm = this.formBuilder.group({
      email: [''],
      password: [''],
      firstName: [''],
      lastName: [''],
      street: [''],
      houseNo: [''],
      flatNo: [''],
      zipCode: [''],
      city: [''],
      phone: ['']
    });
  }

  logIn(): void {
    if (!this.loginForm.valid) {
      return;
    }

    const loginFormValue = this.loginForm.value;
    this.authService.login({email: loginFormValue.email, password: loginFormValue.password})
      .then(_ => console.log(_));
  }

  register(): void {
    console.log(this.registerForm.value);
    if (!this.registerForm.valid) {
      return;
    }

    const registerFormValue = this.registerForm.value;
    this.authService.register({email: registerFormValue.email, password: registerFormValue.password})
      .then(_ => console.log(_));
  }
}
