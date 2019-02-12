import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material';
import { WarehouseMasterComponent } from '../../warehouse-master/warehouse-master.component';

@Component({
  selector: 'app-edit-warehouse-master',
  templateUrl: './edit-warehouse-master.component.html',
  styleUrls: ['./edit-warehouse-master.component.css']
})
export class EditWarehouseMasterComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<WarehouseMasterComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: any) 
    {
      dialogRef.disableClose = true;
     }

  ngOnInit() {
  }

  dropDwon = [
    {value: 'cristiano', viewValue: 'cristiano'},
    {value: 'messi', viewValue: 'messi'},
  ];
  
  close(){
    this.dialogRef.close();
  }

}
