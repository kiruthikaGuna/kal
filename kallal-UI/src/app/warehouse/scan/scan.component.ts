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
    no: 1, Bag: '', Barcode: '', Weight: '', ScanDateTime: ''
  },
  {
    no: 2, Bag: 'Bag 3', Barcode: '6569865695965', Weight: '30.5 kg', ScanDateTime: '4 Nov 2018 12:54 PM'
  }
];

  ngOnInit() { }

  OpenDial() {
    this.router.navigate(['/home/VehicleDetails']);
  }
}
