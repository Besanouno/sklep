import {User} from 'firebase';
import {Observable} from 'rxjs/internal/Observable';
import {Injectable} from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

export interface Credentials {
  email: string;
  password: string;
}

@Injectable({providedIn: 'root'})
export class AuthService {

  readonly authState$: Observable<User | null> = this.fireAuth.authState;

  constructor(private fireAuth: AngularFireAuth) {}

  login({email, password}: Credentials) {
    return this.fireAuth.auth.signInWithEmailAndPassword(email, password);
  }

  register({email, password}: Credentials) {
    return this.fireAuth.auth.createUserWithEmailAndPassword(email, password);
  }

  logout() {
    return this.fireAuth.auth.signOut();
  }

  resetPassword(email: string) {
    return this.fireAuth.auth.sendPasswordResetEmail(email);
  }
}
