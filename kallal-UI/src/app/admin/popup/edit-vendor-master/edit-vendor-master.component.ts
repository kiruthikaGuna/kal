import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material';
import { VenderMasterComponent } from '../../vender-master/vender-master.component';


@Component({
  selector: 'app-edit-vendor-master',
  templateUrl: './edit-vendor-master.component.html',
  styleUrls: ['./edit-vendor-master.component.css']
})
export class EditVendorMasterComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<VenderMasterComponent>, 
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
