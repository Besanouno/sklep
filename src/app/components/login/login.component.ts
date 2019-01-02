import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AuthService} from '../../firebase/auth.service';
import {FirebaseUsersService} from '../../service/firebase-users.service';
import {Router} from '@angular/router';
import {AlertService} from '../../alerts/_services/alert.service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  private failed: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private usersService: FirebaseUsersService,
    private router: Router,
    private alertService: AlertService
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: ['']
    });
  }

  logIn(): void {
    if (!this.loginForm.valid) {
      return;
    }

    const loginFormValue = this.loginForm.value;
    this.authService.login({email: loginFormValue.email, password: loginFormValue.password})
      .then(_ => {
        this.router.navigate(['/']);
      })
      .catch(response => {
        this.failed = true;
        this.message('Niepoprawny email lub hasło');
      });
  }

  message(message: string) {
    this.alertService.error(message);
  }
}
