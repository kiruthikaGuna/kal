import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { EditWarehouseMasterComponent } from '../popup/edit-warehouse-master/edit-warehouse-master.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-warehouse-master',
  templateUrl: './warehouse-master.component.html',
  styleUrls: ['./warehouse-master.component.css']
})
export class WarehouseMasterComponent implements OnInit {

  constructor(public dialog: MatDialog, private router:Router) { }

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
    const dialogRef = this.dialog.open(EditWarehouseMasterComponent, {
      width: '500px',
      //  data: daa,

    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }

    
add() {
  this.router.navigate(['/home/warehouse_add']);
}



}
