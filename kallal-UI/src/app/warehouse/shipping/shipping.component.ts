import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {

  constructor(private router: Router) { }
  table1value = [
    {
      no: 1, Bag: 'Singapore', Barcode: 'Salem', Weight: '15 Feb 2019', Date: '45/nov/9099'
    },
    {
      no: 2, Bag: 'Singapore', Barcode: 'Salem', Weight: '15 Feb 2019', Date: '45/nov/9099'
    }
  ];

  dropDwon = [
    {value: 'cristiano', viewValue: 'cristiano'},
    {value: 'messi', viewValue: 'messi'},
  ];

  ngOnInit() {
  }

  done() {
    this.router.navigate(['/home/TransportList']);
  }
}
