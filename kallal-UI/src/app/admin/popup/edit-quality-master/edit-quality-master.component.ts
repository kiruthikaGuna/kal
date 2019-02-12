import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material';
import { QualityMasterComponent } from '../../quality-master/quality-master.component';


@Component({
  selector: 'app-edit-quality-master',
  templateUrl: './edit-quality-master.component.html',
  styleUrls: ['./edit-quality-master.component.css']
})
export class EditQualityMasterComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<QualityMasterComponent>, 
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
