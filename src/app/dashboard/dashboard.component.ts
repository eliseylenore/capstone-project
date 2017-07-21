import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationService } from '../authentication.service';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [AuthenticationService]
})
export class DashboardComponent {
  user;
  private isLoggedIn: Boolean;
  private userName: String;
  innerHeight: any;
  innerWidth: any;
  isWideEnough: Boolean;
  showMenu: Boolean;

  constructor(public authService: AuthenticationService, private router: Router, private http: Http) {
    this.authService.user.subscribe(user => {
      console.log(user.uid);
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

  onResize(event) {
    this.innerWidth = (event.target.innerWidth) + "px"
    this.isWideEnough = innerWidth > 691
    console.log(this.innerWidth)
  }

  consoleLogSomething() {
    console.log(this.showMenu || this.isWideEnough);
  }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }
}
