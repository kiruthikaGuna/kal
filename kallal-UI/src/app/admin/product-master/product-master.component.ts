import { Component, OnInit } from '@angular/core';
import { EditUsermanagementComponent } from '../popup/edit-usermanagement/edit-usermanagement.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-product-master',
  templateUrl: './product-master.component.html',
  styleUrls: ['./product-master.component.css']
})
export class ProductMasterComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  table1value = [
    { no: '1', ProductCode:'#76767' , ProductName:'Ronaldo'  },
    { no: '2', ProductCode:'#76767' , ProductName:'cr'  },
   ]

  dropDwon = [
    {value: 'cristiano', viewValue: 'cristiano'},
    {value: 'messi', viewValue: 'messi'},
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
