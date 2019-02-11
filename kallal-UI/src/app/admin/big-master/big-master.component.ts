import { Component, OnInit } from '@angular/core';
import { EditUsermanagementComponent } from '../popup/edit-usermanagement/edit-usermanagement.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-big-master',
  templateUrl: './big-master.component.html',
  styleUrls: ['./big-master.component.css']
})
export class BigMasterComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  table1value = [
    { no: '1', Bagsize:'#76767' , Bagname:'Ronaldo' , Bagweight:'3434343' },
    { no: '2', Bagsize:'#76767' , Bagname:'Ronaldo' , Bagweight:'3434343'  },
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


}
