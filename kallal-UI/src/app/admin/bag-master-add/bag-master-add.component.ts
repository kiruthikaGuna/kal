import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bag-master-add',
  templateUrl: './bag-master-add.component.html',
  styleUrls: ['./bag-master-add.component.css']
})
export class BagMasterAddComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  cancel() {
    this.router.navigate(['/home/Big_Master']);
  }
}