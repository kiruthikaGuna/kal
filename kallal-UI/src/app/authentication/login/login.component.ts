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
        this.router.navigate(['home/dashboard']);
      } else {
        return false;
      }
    }
  }
}

