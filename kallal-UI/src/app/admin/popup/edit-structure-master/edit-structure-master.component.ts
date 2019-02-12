import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material';
import { StructureMasterComponent } from '../../structure-master/structure-master.component';


@Component({
  selector: 'app-edit-structure-master',
  templateUrl: './edit-structure-master.component.html',
  styleUrls: ['./edit-structure-master.component.css']
})
export class EditStructureMasterComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<StructureMasterComponent>, 
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
