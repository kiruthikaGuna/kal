import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  table1value = [
    { no: 1, Product: 23141, NoofBags: '2', Totalweight: '50Kg'},
    { no: '2', Product: '96512', NoofBags: '4', Totalweight: '75Kg'},
  ];

  dropDwon = [
    {value: 'india', viewValue: 'india'},
    {value: 'USA', viewValue: 'messi'},
  ];

}
