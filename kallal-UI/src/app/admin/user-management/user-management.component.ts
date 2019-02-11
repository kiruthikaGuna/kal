import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { EditUsermanagementComponent } from '../popup/edit-usermanagement/edit-usermanagement.component';
import { AddUsermanagementComponent } from '../popup/add-usermanagement/add-usermanagement.component';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

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
    const dialogRef = this.dialog.open(AddUsermanagementComponent, {
      width: '500px',
      //  data: daa,

    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }
}
