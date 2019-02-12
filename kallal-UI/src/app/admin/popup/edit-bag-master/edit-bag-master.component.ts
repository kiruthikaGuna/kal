import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material';
import { BigMasterComponent } from '../../big-master/big-master.component';


@Component({
  selector: 'app-edit-bag-master',
  templateUrl: './edit-bag-master.component.html',
  styleUrls: ['./edit-bag-master.component.css']
})
export class EditBagMasterComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<BigMasterComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: any) 
    {
      dialogRef.disableClose = true;
     }

  ngOnInit() {
  }
 
  close(){
    this.dialogRef.close();
  }

}
