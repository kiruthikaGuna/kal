import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  forgetForm: FormGroup;
  constructor( private router: Router) { }

  ngOnInit() {
    this.initExpressForm();
  }

  private initExpressForm() {
    this.forgetForm = new FormGroup({
      'email': new FormControl('', [Validators.required, Validators.email]),

    });
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.forgetForm.controls[controlName].hasError(errorName);
  }

  submit() {
    this.router.navigate(['/authentication']);
  }
}
