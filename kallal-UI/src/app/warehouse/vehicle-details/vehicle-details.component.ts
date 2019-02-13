import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.css']
})
export class VehicleDetailsComponent implements OnInit {

  constructor(public dialog: MatDialog, private router: Router) { }
  table1value = [
    {
      no: 1, Product: 'Cloves', NoofBags: '5', Quantity: '25 kg', DispatchCenter: 'Singapore',
      ShippedDate: '25 Dec 2018', Weight: '25.5 kg'
    },
    {
      no: 2, Product: 'Cardamom', NoofBags: '3', Quantity: '20 kg', DispatchCenter: 'SriLanka',
      ShippedDate: '02 Jan 2019', Weight: '20.5 kg'
    },
    {
      no: 3, Product: 'Cinnamon', NoofBags: '1', Quantity: '25 kg', DispatchCenter: 'Malaysia',
      ShippedDate: '16 Jan 2019', Weight: '25.5 kg'
    }
  ];

  ngOnInit() { }

  OpenDial() {
    this.router.navigate(['/home/Scan']);
  }
}
