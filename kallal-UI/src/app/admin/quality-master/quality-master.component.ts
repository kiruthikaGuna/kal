import { Component, OnInit } from '@angular/core';
import { EditUsermanagementComponent } from '../popup/edit-usermanagement/edit-usermanagement.component';
import { MatDialog } from '@angular/material';
import { EditQualityMasterComponent } from '../popup/edit-quality-master/edit-quality-master.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quality-master',
  templateUrl: './quality-master.component.html',
  styleUrls: ['./quality-master.component.css']
})
export class QualityMasterComponent implements OnInit {

  constructor(public dialog: MatDialog, private router: Router) { }

  ngOnInit() {
  }
  table1value = [
    { no: '1', QualityCode:'#76767' , QualityName:'Ronaldo'  },
    { no: '2', QualityCode:'#76767' , QualityName:'cr'  },
   ]

  dropDwon = [
    {value: 'cristiano', viewValue: 'cristiano'},
    {value: 'messi', viewValue: 'messi'},
  ];


  edit() {
    const dialogRef = this.dialog.open(EditQualityMasterComponent, {
      width: '500px',
      //  data: daa,

    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }

  add() {
    this.router.navigate(['/home/QualityMaster_add']);
  }

}
