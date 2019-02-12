import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-structure-master-add',
  templateUrl: './structure-master-add.component.html',
  styleUrls: ['./structure-master-add.component.css']
})
export class StructureMasterAddComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  dropDwon = [
    { value: 'cristiano', viewValue: 'cristiano' },
    { value: 'messi', viewValue: 'messi' },
  ];
  cancel() {
    this.router.navigate(['/home/Structure_Master']);
  }

}