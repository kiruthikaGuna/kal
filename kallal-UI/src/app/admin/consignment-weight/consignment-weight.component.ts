import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consignment-weight',
  templateUrl: './consignment-weight.component.html',
  styleUrls: ['./consignment-weight.component.css']
})
export class ConsignmentWeightComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  table1value = [
    {
      no: '1', Bag: 'bag1', Barcode: '7676656', LoadedWeight: '34', ArrivedWeight: '40',
      WeightDifference: '6'
    },
    {
      no: '2', Bag: 'bag2', Barcode: '7676656', LoadedWeight: '34', ArrivedWeight: '40',
      WeightDifference: '6'
    },
    {
      no: '3', Bag: 'bag3', Barcode: '7676656', LoadedWeight: '34', ArrivedWeight: '40',
      WeightDifference: '6'
    },
  ]

}
