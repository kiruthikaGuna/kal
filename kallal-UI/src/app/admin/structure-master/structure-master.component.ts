import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { EditStructureMasterComponent } from '../popup/edit-structure-master/edit-structure-master.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-structure-master',
  templateUrl: './structure-master.component.html',
  styleUrls: ['./structure-master.component.css']
})
export class StructureMasterComponent implements OnInit {

  constructor(public dialog: MatDialog, private router: Router) { }

  ngOnInit() {
  }
  table2value = [
    { no: '1', StorageCode: 'Cristiano Ronaldo', StorageName: 'Cristiano Ronaldo',TemperatureCondition:'ss', StoragePeriod: '15day', size: '12*1343*11' },
    { no: '2', StorageCode: 'Cristiano Ronaldo', StorageName: 'Cristiano Ronaldo',TemperatureCondition:'ss', StoragePeriod: '15day', size: '12*1343*11' }
  ]

  dropDwon = [
    {value: 'cristiano', viewValue: 'cristiano'},
    {value: 'messi', viewValue: 'messi'},
  ];


  edit() {
    const dialogRef = this.dialog.open(EditStructureMasterComponent, {
      width: '500px',
      //  data: daa,

    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }

  
  add() {
    this.router.navigate(['/home/structureMaster_add']);
  }

}
