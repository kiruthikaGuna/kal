import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transport-history',
  templateUrl: './transport-history.component.html',
  styleUrls: ['./transport-history.component.css']
})
export class TransportHistoryComponent implements OnInit {

  constructor( private router: Router) { }
  table1value = [
    {
      VehicleNo: '34343', BatchNo: 'Singapore', Dispatch: 'Salem', WareHouse: '15 Feb 2019',
      ShippedDate: '25 Mar 2019', ArrivedDate: '5', Noofbags: '34', Weight: '40',
      Status: 'In Transit'
    },
    {
      VehicleNo: '22211', BatchNo: 'Singapore', Dispatch: 'Salem', WareHouse: '15 Feb 2019',
      ShippedDate: '25 Mar 2019', ArrivedDate: '5', Noofbags: '34', Weight: '40',
      Status: 'In Transit'
    }
  ];


  ngOnInit() {
  }
  OpenDial() {
    this.router.navigate(['home/TransportDetails']);
  }
}
