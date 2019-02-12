import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-currency-master-add',
  templateUrl: './currency-master-add.component.html',
  styleUrls: ['./currency-master-add.component.css']
})
export class CurrencyMasterAddComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  dropDwon = [
    { value: 'cristiano', viewValue: 'cristiano' },
    { value: 'messi', viewValue: 'messi' },
  ];

  cancel() {
    this.router.navigate(['/home/Currency_Master']);
  }
}