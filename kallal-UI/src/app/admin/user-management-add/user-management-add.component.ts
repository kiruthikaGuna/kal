import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-management-add',
  templateUrl: './user-management-add.component.html',
  styleUrls: ['./user-management-add.component.css']
})
export class UserManagementAddComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  location = [
    { value: 'cristiano', viewValue: 'cristiano' },
    { value: 'messi', viewValue: 'messi' },
  ];

  status = [
    { value: 'cristiano', viewValue: 'cristiano' },
    { value: 'messi', viewValue: 'messi' },
  ];

  mobileuser = [
    { value: 'cristiano', viewValue: 'cristiano' },
    { value: 'messi', viewValue: 'messi' },
  ];
  cancel(){
    this.router.navigate(['/home/User_Management']);
  }
}
