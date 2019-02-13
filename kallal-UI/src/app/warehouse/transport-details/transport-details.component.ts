import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transport-details',
  templateUrl: './transport-details.component.html',
  styleUrls: ['./transport-details.component.css']
})
export class TransportDetailsComponent implements OnInit {

  constructor(private router: Router) { }
  table1value = [
    {
      no: '1', ConsignmentNo: '34', Bag: 'bag1', Barcode: '7676656', ArrivedWeight: '40',
      BagWeight: '6' ,  Product: 'colves'
    },
    {
      no: '2', Bag: 'bag2', Barcode: '7676656', ConsignmentNo: '34', ArrivedWeight: '40',
      BagWeight: '6' , Product: 'colves'
    },
    {
      no: '3', Bag: 'bag3', Barcode: '7676656', ConsignmentNo: '34', ArrivedWeight: '40',
      BagWeight: '6' ,  Product: 'colves'
    },
  ];

  ngOnInit() {
  }

  cancel() {
    this.router.navigate(['/home/TransportHistory']);
  }

}
