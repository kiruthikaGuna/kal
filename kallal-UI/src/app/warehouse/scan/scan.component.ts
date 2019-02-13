import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-scan',
  templateUrl: './scan.component.html',
  styleUrls: ['./scan.component.css']
})
export class ScanComponent implements OnInit {

  constructor(public dialog: MatDialog, private router: Router) { }

  table1value = [
    {
      no: 1, VehicleNo: 'TVS122545', DispatchCenter: 'Singapore', ShippedDate: '15 Feb 2019',
      ArrivedDate: '25 Mar 2019', NoOfBags: '5'
    },
    {
      no: 2, VehicleNo: 'TVS12255', DispatchCenter: 'Singapore', ShippedDate: '15 Feb 2019',
      ArrivedDate: '25 Mar 2019', NoOfBags: '5'
    }
  ];

  ngOnInit() { }

  OpenDial() {
    this.router.navigate(['/home/VehicleDetails']);
  }
}
