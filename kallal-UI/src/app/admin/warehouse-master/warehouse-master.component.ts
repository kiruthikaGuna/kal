import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { EditUsermanagementComponent } from '../popup/edit-usermanagement/edit-usermanagement.component';
import { AddUsermanagementComponent } from '../popup/add-usermanagement/add-usermanagement.component';

@Component({
  selector: 'app-warehouse-master',
  templateUrl: './warehouse-master.component.html',
  styleUrls: ['./warehouse-master.component.css']
})
export class WarehouseMasterComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  table2value = [
    { no: '1', WarehouseCode: 'Cristiano Ronaldo', warehouseName: 'Cristiano Ronaldo',Email:'cr7@HammerGestureConfig.io', Address: 'main road value ', Phone: '979797977' },
    { no: '2', WarehouseCode: 'Cristiano Ronaldo', warehouseName: 'Cristiano Ronaldo',Email:'cr7@HammerGestureConfig.io', Address: 'main road value ', Phone: '979797977' }, 
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
