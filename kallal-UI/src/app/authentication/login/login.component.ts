import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  data: {};
  email: string;
  password: string;
  expressForm: FormGroup;

  constructor(private router: Router) { }

  ngOnInit() {
    this.data = {};
    this.initExpressForm();
  }

  private initExpressForm() {
    this.expressForm = new FormGroup({
      'email': new FormControl('', [Validators.required, Validators.email]),
      'password': new FormControl('', [Validators.required])
    });
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.expressForm.controls[controlName].hasError(errorName);
  }

  public signIn() {
    if (this.expressForm.valid) {
      if (this.expressForm.controls.email.value === 'admin@123.com' && this.expressForm.controls.password.value === 'admin') {
        const login_user = {'userid': this.expressForm.controls.email.value, 'user_name': 'test', 'role': 'admin'};
        localStorage.setItem('userid', login_user.userid);
        localStorage.setItem('login_user', JSON.stringify(login_user));
        this.router.navigate(['/home/dashboard']);
      } else if (this.expressForm.controls.email.value === 'warehouse@123.com'
      && this.expressForm.controls.password.value === 'warehouse') {
        const login_user = {'userid': this.expressForm.controls.email.value, 'user_name': 'test', 'role': 'warehouse'};
        localStorage.setItem('userid', login_user.userid);
        localStorage.setItem('login_user', JSON.stringify(login_user));
        this.router.navigate(['/home/TransportList']);
      } else if (this.expressForm.controls.email.value === 'dispatch@123.com' && this.expressForm.controls.password.value === 'dispatch') {
        const login_user = {'userid': this.expressForm.controls.email.value, 'user_name': 'test', 'role': 'dispatch'};
        localStorage.setItem('userid', login_user.userid);
        localStorage.setItem('login_user', JSON.stringify(login_user));
        this.router.navigate(['/home/']);
      } else {
        return false;
      }
    }
  }
}

