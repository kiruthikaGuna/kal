import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transport-list',
  templateUrl: './transport-list.component.html',
  styleUrls: ['./transport-list.component.css']
})
export class TransportListComponent implements OnInit {
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
