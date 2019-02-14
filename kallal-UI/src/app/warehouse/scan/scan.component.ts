import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-scan',
  templateUrl: './scan.component.html',
  styleUrls: ['./scan.component.css']
})
export class ScanComponent implements OnInit {

  constructor(public dialog: MatDialog, private router: Router) { }

  table1value = [
    {
    no: 1, Bag: '', BagID: '', Weight: '', ScanDateTime: ''
  },
  {
    no: 2, Bag: 'Bag 3', BagID: '6569865695965', Weight: '30.5 kg', ScanDateTime: '4 Nov 2018 12:54 PM'
  },
  {
    no: 3, Bag: 'Bag 2', BagID: '6569865695965', Weight: '10.5 kg', ScanDateTime: '4 Nov 2018 12:54 PM'
  },
  {
    no: 4, Bag: 'Bag 1', BagID: '6569865695965', Weight: '30.5 kg', ScanDateTime: '4 Nov 2018 12:54 PM'
  }
];

dropDwon = [
  {value: 'stru-1', viewValue: 'Structure 1'},
  {value: 'stru-2', viewValue: 'Structure 2'},
  {value: 'stru-3', viewValue: 'Structure 3'},
  {value: 'stru-4', viewValue: 'Structure 4'},
  {value: 'stru-5', viewValue: 'Structure 5'}
];

  ngOnInit() { }

  OpenDial() {
    this.router.navigate(['/home/Repacking']);
  }
}
