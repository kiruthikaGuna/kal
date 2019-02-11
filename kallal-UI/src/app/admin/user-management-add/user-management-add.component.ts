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

  cancel(){
    this.router.navigate(['/home/User_Management']);
  }
}
