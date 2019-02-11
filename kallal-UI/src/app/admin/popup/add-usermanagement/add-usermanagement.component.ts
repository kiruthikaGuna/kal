import { Component, OnInit , Inject} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material';
import { UserManagementComponent } from '../../user-management/user-management.component';
import { VenderMasterComponent } from '../../vender-master/vender-master.component';

@Component({
  selector: 'app-add-usermanagement',
  templateUrl: './add-usermanagement.component.html',
  styleUrls: ['./add-usermanagement.component.css']
})
export class AddUsermanagementComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<UserManagementComponent,VenderMasterComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { 
    dialogRef.disableClose = true;
  }

  ngOnInit() {
  }

  close(){
    this.dialogRef.close();
  }
}
