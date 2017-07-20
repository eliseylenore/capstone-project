import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationService } from '../authentication.service';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  user;
  private isLoggedIn: Boolean;
  private userName: String;
  innerHeight: any;
  innerWidth: any;
  isWideEnough: Boolean;

  constructor(public authService: AuthenticationService, private router: Router, private http: Http) {
    this.authService.user.subscribe(user => {
      if(user === null) {
        this.isLoggedIn = false;
      } else {
        this.isLoggedIn = true;
        this.userName = user.displayName;
      }
      this.innerHeight = (window.screen.height) + "px";
      this.innerWidth = (window.screen.width) + "px";
      this.isWideEnough = innerWidth > 691;
    });
  }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }
}
