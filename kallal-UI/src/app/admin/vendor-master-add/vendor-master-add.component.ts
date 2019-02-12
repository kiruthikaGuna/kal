import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vendor-master-add',
  templateUrl: './vendor-master-add.component.html',
  styleUrls: ['./vendor-master-add.component.css']
})
export class VendorMasterAddComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  dropDwon = [
    { value: 'cristiano', viewValue: 'cristiano' },
    { value: 'messi', viewValue: 'messi' },
  ];
  cancel() {
    this.router.navigate(['/home/Vender_Master']);
  }
}