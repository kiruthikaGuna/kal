import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dispatch-masetr-add',
  templateUrl: './dispatch-masetr-add.component.html',
  styleUrls: ['./dispatch-masetr-add.component.css']
})
export class DispatchMasetrAddComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  dropDwon = [
    { value: 'cristiano', viewValue: 'cristiano' },
    { value: 'messi', viewValue: 'messi' },
  ];
  cancel() {
    this.router.navigate(['/home/Dispatch_Master']);
  }

}
