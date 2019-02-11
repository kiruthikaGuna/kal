import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { EditUsermanagementComponent } from '../popup/edit-usermanagement/edit-usermanagement.component';
import { AddUsermanagementComponent } from '../popup/add-usermanagement/add-usermanagement.component';
import { HammerGestureConfig } from '@angular/platform-browser';

@Component({
  selector: 'app-vender-master',
  templateUrl: './vender-master.component.html',
  styleUrls: ['./vender-master.component.css']
})
export class VenderMasterComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  table2value = [
    { no: '1', CompanyCode: 'Cristiano Ronaldo', Companyname: 'Cristiano Ronaldo',Email:'cr7@HammerGestureConfig.io', Address: 'main road value ', Phone: '979797977', License: '8888', GST: '000',Contactperson: 'ronaldo' },
    { no: '2', CompanyCode: 'Cristiano', Companyname: 'Ronaldo',Email:'cr7@HammerGestureConfig.io', Address: 'main road value ', Phone: '979797977', License: '8888', GST: '000',Contactperson: 'ronaldo' }
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
