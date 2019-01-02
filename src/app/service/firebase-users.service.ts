import {Injectable, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import {User} from '../model/User';

@Injectable()
export class FirebaseUsersService {

  public data: AngularFireList<any[]>;

  constructor(private db: AngularFireDatabase) {
    this.data = this.db.list('users');
  }

  public getUsers(): Observable<any[]> {
    return this.data.valueChanges();
  }

  public saveUser(value: User): void {
    this.data.push([value]);
  }
}
