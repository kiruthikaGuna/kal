import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ConsignmentalDetailComponent } from '../../consignmental-detail/consignmental-detail.component';

@Component({
  selector: 'app-consignment-search',
  templateUrl: './consignment-search.component.html',
  styleUrls: ['./consignment-search.component.css']
})
export class ConsignmentSearchComponent implements OnInit {

  constructor(private router: Router, public dialogRef: MatDialogRef<ConsignmentalDetailComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: any) 
    {
      dialogRef.disableClose = true;
     }

  ngOnInit() {
  }

  dropDwon = [
    { value: 'cristiano', viewValue: 'cristiano' },
    { value: 'messi', viewValue: 'messi' },
  ];

  dropware = [
    { value: 'cristiano', viewValue: 'cristiano' },
    { value: 'messi', viewValue: 'messi' },
  ];

  save() {
    this.dialogRef.close();
  }
}
