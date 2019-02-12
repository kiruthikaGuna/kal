import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quality-maseter-add',
  templateUrl: './quality-maseter-add.component.html',
  styleUrls: ['./quality-maseter-add.component.css']
})
export class QualityMaseterAddComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  cancel() {
    this.router.navigate(['/home/Quality_Master']);
  }
}