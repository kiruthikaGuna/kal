import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  [x: string]: any;
  constructor() { }

  ngOnInit() {
  }

  dashboard () {
    this.menu = 'dashboard';
  }
  user_management () {
    this.menu = 'user management';
  }
  vendor_master () {
    this.menu = 'vendor master';
  }
  dispatch_master () {
    this.menu = 'dispatch master';
  }
  device_Allocation () {
    this.menu = 'warehouse master';
  }
  manage_devices () {
    this.menu = 'structure master';
  }
  manage_rooms () {
    this.menu = 'product master';
  }
  roles () {
    this.menu = 'quality master';
  }
  users () {
    this.menu = 'bag master';
  }
  current_recording () {
    this.menu = 'currency master';
  }
  role_activity_mapping () {
    this.menu = 'approval';
  }
 }
