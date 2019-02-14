import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structures',
  templateUrl: './structures.component.html',
  styleUrls: ['./structures.component.css']
})
export class StructuresComponent implements OnInit {

  constructor() { }
  table1value = [
    { Product: '23141', NoofBags: '2', Totalweight: '50Kg' },
    { Product: '96512', NoofBags: '4', Totalweight: '75Kg' },
    { Product: '96512', NoofBags: '4', Totalweight: '75Kg' },
  ];

  ngOnInit() { }
}
