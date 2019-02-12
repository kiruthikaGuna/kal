import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { EditBagMasterComponent } from '../popup/edit-bag-master/edit-bag-master.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-big-master',
  templateUrl: './big-master.component.html',
  styleUrls: ['./big-master.component.css']
})
export class BigMasterComponent implements OnInit {

  constructor(public dialog: MatDialog, private router: Router) { }

  ngOnInit() {
  }

  table1value = [
    { no: '1', Bagsize:'#76767' , Bagname:'Ronaldo' , Bagweight:'3434343' },
    { no: '2', Bagsize:'#76767' , Bagname:'Ronaldo' , Bagweight:'3434343'  },
   ]

  dropDwon = [
    {value: 'cristiano', viewValue: 'cristiano'},
    {value: 'messi', viewValue: 'messi'},
  ];


  edit() {
    const dialogRef = this.dialog.open(EditBagMasterComponent, {
      width: '500px',
      //  data: daa,

    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }

  add() {
    this.router.navigate(['/home/BagMaster_add']);
  }
}
