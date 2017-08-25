import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationService } from '../authentication.service';
import { Http } from '@angular/http';
import { Router, NavigationStart, Event  } from '@angular/router';

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
  userId: String;
  onSearchPage: Boolean;

  constructor(public authService: AuthenticationService, private router: Router, private http: Http) {
    this.authService.user.subscribe(user => {
      console.log(user);
      if(user === null) {
        this.userId = "null";
        this.isLoggedIn = false;
      } else {
        this.isLoggedIn = true;
        this.userId = user.uid;
        this.userName = user.displayName;
      }
      this.innerHeight = (window.screen.height) + "px";
      this.innerWidth = (window.screen.width) + "px";
      this.isWideEnough = innerWidth > 691;
    });

    router.events.subscribe(event => {
      if (event.constructor.name === 'NavigationEnd') {
        console.log(router.url);
        if (router.url.startsWith("/search")) {
          this.onSearchPage = true;
          console.log("on search page? " + this.onSearchPage);
        } else {
          this.onSearchPage = false;
        }

      }
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

  checkout() {
    this.authService.user.subscribe(user => {
      if(user === null) {
        this.userId = "null"
      } else {
        this.userId = user.uid;
      }
      this.router.navigate(['stripe', this.userId]);
    });
  }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }

  searchThis(search) {
      this.router.navigate(['search', search]);
  }
}
