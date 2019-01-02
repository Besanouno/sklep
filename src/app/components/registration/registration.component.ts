import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserType} from '../../model/UserType';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AuthService} from '../../firebase/auth.service';
import {FirebaseUsersService} from '../../service/firebase-users.service';

@Component({
  selector: 'app-registration-component',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  private weakPassword: boolean = false;
  private emailExists: boolean = false;
  public registerForm: FormGroup;

  constructor(
    private router: Router,
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private usersService: FirebaseUsersService
  ) {}

  ngOnInit() {
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

  register(): void {
    console.log(this.registerForm.value);
    if (!this.registerForm.valid) {
      return;
    }

    const registerFormValue = this.registerForm.value;
    this.authService.register({email: registerFormValue.email, password: registerFormValue.password})
      .then(_ => {
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
        this.router.navigate(['/']);
      })
      .catch(response => {
        if (response.code === 'auth/weak-password') {
          this.weakPassword = true;
        } else if (response.code === 400 && response.message === 'EMAIL_EXISTS') {
          this.emailExists = true;
        }
      });
  }
}
