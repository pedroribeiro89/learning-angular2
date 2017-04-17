import { User } from './user.interface';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject,Observable } from 'rxjs/Rx';

declare var firebase:any;

@Injectable()
export class AuthService {
  constructor(private router: Router) {}

  signupUser(user: User) {
    firebase.auth().createUserWithEmailAndPassword(user.email, user.password).catch(function(error) {
      console.log(error);
    });
  }

  signinUser(user: User) {
    firebase.auth().signInWithEmailAndPassword(user.email, user.password).catch(function(error) {
      console.log(error);
    });
  }

  logout(){
    firebase.auth().signOut();
    this.router.navigate(['/signin']);
  }

  isAutheticaded(): Observable<boolean> {
    const subject = new Subject<boolean>();//Subject is an object that can emit event and work as an observable
                                           //in this case, it emit booleans and returns boolean when observed
    firebase.auth().onAuthStateChanged(function(user) {
      if(user){
        subject.next(true);//emit a new value
      }else{
        subject.next(false);//emit a new value
      }
    });
    return subject.asObservable();//outside of the method is only possible to subscribe to subject
  }
}
