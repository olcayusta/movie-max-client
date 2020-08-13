import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn: BehaviorSubject<boolean>;

  constructor() {
    const login = localStorage.getItem('login');
    if (login) {
      this.isLoggedIn = new BehaviorSubject<boolean>(true);
    } else {
      this.isLoggedIn = new BehaviorSubject<boolean>(false);
    }
  }

  login(): void {
    localStorage.setItem('login', 'true');
    this.isLoggedIn.next(true);
  }

  logout(): void {
    localStorage.clear();
    this.isLoggedIn.next(false);
  }
}
