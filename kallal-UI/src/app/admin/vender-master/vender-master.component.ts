import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { EditVendorMasterComponent } from '../popup/edit-vendor-master/edit-vendor-master.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-vender-master',
  templateUrl: './vender-master.component.html',
  styleUrls: ['./vender-master.component.css']
})
export class VenderMasterComponent implements OnInit {

  constructor(public dialog: MatDialog, private router: Router) { }

  table2value = [
    {
      no: '1', CompanyCode: 'Cristiano Ronaldo', Companyname: 'Cristiano Ronaldo',
      Email: 'cr7@HammerGestureConfig.io', Address: 'main road value ',
      Phone: '979797977', License: '8888', GST: '000', Contactperson: 'ronaldo'
    },
    {
      no: '2', CompanyCode: 'Cristiano', Companyname: 'Ronaldo',
      Email: 'cr7@HammerGestureConfig.io', Address: 'main road value ',
      Phone: '979797977', License: '8888', GST: '000', Contactperson: 'ronaldo'
    }
  ];

  dropDwon = [
    { value: 'cristiano', viewValue: 'cristiano' },
    { value: 'messi', viewValue: 'messi' },
  ];

  ngOnInit() {
  }


  edit() {
    const dialogRef = this.dialog.open(EditVendorMasterComponent, {
      width: '500px',
      //  data: daa,

    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }

  add() {
    this.router.navigate(['/home/vendorMaster_add']);
  }

}
