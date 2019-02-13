import { MatDialog } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consignmental-detail',
  templateUrl: './consignmental-detail.component.html',
  styleUrls: ['./consignmental-detail.component.css']
})
export class ConsignmentalDetailComponent implements OnInit {

  constructor( private router: Router) { }

  table1value = [
    {
      ConsignmentNo: 'TVS122545', From: 'Singapore', To: 'Salem', ShippedDate: '15 Feb 2019',
      ArrivedDate: '25 Mar 2019', NoOfBags: '5', LoadedWeight: '34', ArrivedWeight: '40',
      WeightDifference: '6', Status: 'In Transit'
    },
    {
      ConsignmentNo: 'TVS765589', From: 'Singapore', To: 'Salem', ShippedDate: '15 Feb 2019',
      ArrivedDate: '25 Mar 2019', NoOfBags: '5', LoadedWeight: '34', ArrivedWeight: '40',
      WeightDifference: '6', Status: 'SriLanka'
    }
  ];

  ngOnInit() {
  }

  OpenDial() {
    this.router.navigate(['home/consignmentWeight']);
  }
}
