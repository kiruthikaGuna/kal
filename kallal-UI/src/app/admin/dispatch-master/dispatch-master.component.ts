import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { EditUsermanagementComponent } from '../popup/edit-usermanagement/edit-usermanagement.component';
import { EditDispatchMasterComponent } from '../popup/edit-dispatch-master/edit-dispatch-master.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dispatch-master',
  templateUrl: './dispatch-master.component.html',
  styleUrls: ['./dispatch-master.component.css']
})
export class DispatchMasterComponent implements OnInit {

  constructor(public dialog: MatDialog, private router: Router) { }

  ngOnInit() {
  }
  table2value = [
    { no: '1', CompanyCode: 'Cristiano Ronaldo', Companyname: 'Cristiano Ronaldo',Email:'cr7@HammerGestureConfig.io', Address: 'main road value ', Phone: '979797977', License: '8888'},
    { no: '2', CompanyCode: 'Cristiano', Companyname: 'Ronaldo',Email:'cr7@HammerGestureConfig.io', Address: 'main road value ', Phone: '979797977', License: '8888' }
  ]

  dropDwon = [
    {value: 'cristiano', viewValue: 'cristiano'},
    {value: 'messi', viewValue: 'messi'},
  ];


  edit() {
    const dialogRef = this.dialog.open(EditDispatchMasterComponent, {
      width: '500px',
      //  data: daa,

    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }

  add() {
    this.router.navigate(['/home/dispatch_add']);
  }

}
