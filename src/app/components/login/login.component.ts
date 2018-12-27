import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AuthService} from '../../firebase/auth.service';
import {FirebaseUsersService} from '../../service/firebase-users.service';
import {UserType} from '../../model/UserType';

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
    private authService: AuthService,
    private usersService: FirebaseUsersService
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
    this.usersService.saveUser({
      firstName: registerFormValue.firstName,
      lastName: registerFormValue.lastName,
      phone: registerFormValue.phone,
      street: registerFormValue.street,
      flatNo: registerFormValue.flatNo,
      houseNo: registerFormValue.houseNo,
      zipCode: registerFormValue.zipCode,
      city: registerFormValue.city,
      type: UserType.CLIENT
    });
  }
}
