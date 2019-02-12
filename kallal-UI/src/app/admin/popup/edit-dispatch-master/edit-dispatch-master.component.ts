import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material';
import { DispatchMasterComponent } from '../../dispatch-master/dispatch-master.component';

@Component({
  selector: 'app-edit-dispatch-master',
  templateUrl: './edit-dispatch-master.component.html',
  styleUrls: ['./edit-dispatch-master.component.css']
})
export class EditDispatchMasterComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DispatchMasterComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: any) 
    {
      dialogRef.disableClose = true;
     }

  ngOnInit() {
  }
  close(){
    this.dialogRef.close();
  }

  dropDwon = [
    {value: 'cristiano', viewValue: 'cristiano'},
    {value: 'messi', viewValue: 'messi'},
  ];
}
