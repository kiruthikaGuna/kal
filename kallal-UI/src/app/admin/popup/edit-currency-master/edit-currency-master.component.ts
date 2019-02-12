import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material';
import { CurrencyMasterComponent } from '../../currency-master/currency-master.component';


@Component({
  selector: 'app-edit-currency-master',
  templateUrl: './edit-currency-master.component.html',
  styleUrls: ['./edit-currency-master.component.css']
})
export class EditCurrencyMasterComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CurrencyMasterComponent>, 
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
