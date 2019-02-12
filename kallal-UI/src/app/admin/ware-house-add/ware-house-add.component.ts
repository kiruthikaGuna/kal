import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ware-house-add',
  templateUrl: './ware-house-add.component.html',
  styleUrls: ['./ware-house-add.component.css']
})
export class WareHouseAddComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
 dropDwon = [
    { value: 'cristiano', viewValue: 'cristiano' },
    { value: 'messi', viewValue: 'messi' },
  ];
  cancel() {
    this.router.navigate(['/home/Warehouse_Master']);
  }

}
