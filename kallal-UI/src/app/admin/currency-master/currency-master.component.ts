import { Component, OnInit } from '@angular/core';
import { EditUsermanagementComponent } from '../popup/edit-usermanagement/edit-usermanagement.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-currency-master',
  templateUrl: './currency-master.component.html',
  styleUrls: ['./currency-master.component.css']
})
export class CurrencyMasterComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  table1value = [
    { no: '1', CurrencyCode: 'Cristiano', Currencydescription: 'Ronaldo' },
    { no: '2', CurrencyCode: 'Cristiano', Currencydescription: 'Ronaldo' }
  ]

  dropDwon = [
    { value: 'cristiano', viewValue: 'cristiano' },
    { value: 'messi', viewValue: 'messi' },
  ];


  edit() {
    const dialogRef = this.dialog.open(EditUsermanagementComponent, {
      width: '500px',
      //  data: daa,

    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }


}
