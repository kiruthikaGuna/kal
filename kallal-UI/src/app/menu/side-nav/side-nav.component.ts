import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  intervalObj: any;
  headerTitle;
  pathname;
  [x: string]: any;

  constructor(private router: Router, route: ActivatedRoute) {
  }

  ngOnInit() {
  }
  // active class set
  brumbCrumb(menuname) {
    this.menu = menuname;
  }

  settings() {
    this.router.navigate(['/home/changepassword']);
  }

}
