import {Injectable, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import {User} from '../model/User';

@Injectable()
export class FirebaseUsersService implements OnInit {

  public data: AngularFireList<any[]>;

  constructor(private db: AngularFireDatabase) {
  }

  ngOnInit() {
    this.data = this.db.list('users');
  }

  public getUsers(): Observable<any[]> {
    return this.db.list('users').valueChanges();
  }

  public saveUser(value: User): void {
    this.data.push([value]);
  }
}
