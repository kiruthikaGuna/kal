import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  data: {};

  constructor( private router: Router) { }

  ngOnInit() {
    this.data = {};
  }

  signIn(senddata) {
   if (senddata.userid === 'admin' && senddata.password === 'admin') {
      localStorage.setItem('userid', senddata.userid);
      this.router.navigate(['home/dashboard']);
    } else {
      return false;
     }
  }
}
