import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { EditCurrencyMasterComponent } from '../popup/edit-currency-master/edit-currency-master.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-currency-master',
  templateUrl: './currency-master.component.html',
  styleUrls: ['./currency-master.component.css']
})
export class CurrencyMasterComponent implements OnInit {

  constructor(public dialog: MatDialog, private router:Router) { }

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
    const dialogRef = this.dialog.open(EditCurrencyMasterComponent, {
      width: '500px',
      //  data: daa,

    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }

  add() {
    this.router.navigate(['/home/currencyMaster_add']);
  }


}
