import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { EditUsermanagementComponent } from '../popup/edit-usermanagement/edit-usermanagement.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {

  constructor(public dialog: MatDialog,private router: Router) { }

  ngOnInit() {
  }

  table1value = [
    { no: '1', Firstname: 'Cristiano', LastName: 'Ronaldo', Email: 'cr7@gmail.com', Phone: '979797977', Department: 'Football', Role: 'jhkhjgh' },
    { no: '2', Firstname: 'Cristiano', LastName: 'Ronaldo', Email: 'cr7@gmail.com', Phone: '979797977', Department: 'Football', Role: 'ffwww' }
  ]

  dropDwon = [
    {value: 'cristiano', viewValue: 'cristiano'},
    {value: 'messi', viewValue: 'messi'},
  ];


  edit() {
    const dialogRef = this.dialog.open(EditUsermanagementComponent, {
      width: '500px',
      //  data: daa,

    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }

  add() {
    this.router.navigate(['/home/user_Management_add']);
  }

}
