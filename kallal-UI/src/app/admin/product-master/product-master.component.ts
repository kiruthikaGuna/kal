import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { EditProductMasterComponent } from '../popup/edit-product-master/edit-product-master.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-master',
  templateUrl: './product-master.component.html',
  styleUrls: ['./product-master.component.css']
})
export class ProductMasterComponent implements OnInit {

  constructor(public dialog: MatDialog, private router: Router) { }

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
    const dialogRef = this.dialog.open(EditProductMasterComponent, {
      width: '500px',
      //  data: daa,

    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }

  add() {
    this.router.navigate(['/home/productMaster_add']);
  }

}
