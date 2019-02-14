import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  constructor(private router: Router) { }
  table1value = [
    {
     no: 1 , consignmentNo: '1212' , view: 'view'
    },
    {
      no: 2 , consignmentNo: '9989' , view: 'view'
    }
  ];

  ngOnInit() {
  }

  OpenDial() {
    this.router.navigate(['home/TransportDetails']);
  }

}
