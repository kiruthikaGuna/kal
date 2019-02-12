import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-master-add',
  templateUrl: './product-master-add.component.html',
  styleUrls: ['./product-master-add.component.css']
})
export class ProductMasterAddComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  cancel() {
    this.router.navigate(['/home/Product_Master']);
  }


}