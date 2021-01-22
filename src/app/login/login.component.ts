import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor (private router: Router,) {}
  login() {
    if (this.username === this.password)
      this.router.navigate(['/dashboard']);
  }
}
