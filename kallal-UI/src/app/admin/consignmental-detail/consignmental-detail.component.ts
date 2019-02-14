import { MatDialog } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConsignmentSearchComponent } from '../popup/consignment-search/consignment-search.component';

@Component({
  selector: 'app-consignmental-detail',
  templateUrl: './consignmental-detail.component.html',
  styleUrls: ['./consignmental-detail.component.css']
})
export class ConsignmentalDetailComponent implements OnInit {

  constructor(public dialog: MatDialog, private router: Router) { }
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

  search() {
    const dialogRef = this.dialog.open(ConsignmentSearchComponent, {
      width: '425px',
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }
}
