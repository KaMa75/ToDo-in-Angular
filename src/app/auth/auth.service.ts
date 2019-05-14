import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: User;

  constructor(public authFire: AngularFireAuth, private router: Router) {
    this.authFire.authState.subscribe(user => {
      this.user = user;
    });
  }

  login(email: string, password: string) {
    this.authFire.auth.signInWithEmailAndPassword(email, password)
    .then(user => {
      this.router.navigate(['']);
    })
    .catch(err => {
      console.log(err);
    })
  }

  signup(email: string, password: string) {
    this.authFire.auth.createUserWithEmailAndPassword(email, password)
    .then(user => {
      console.log(user);
    })
    .catch(err => {
      console.log(err);
    });
  }

  logout() {
    this.authFire.auth.signOut();
  }

}
