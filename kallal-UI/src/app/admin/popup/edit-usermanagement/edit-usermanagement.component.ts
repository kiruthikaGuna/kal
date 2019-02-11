import { Component, OnInit , Inject} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material';
import { UserManagementComponent } from '../../user-management/user-management.component';
import { VenderMasterComponent } from '../../vender-master/vender-master.component';


@Component({
  selector: 'app-edit-usermanagement',
  templateUrl: './edit-usermanagement.component.html',
  styleUrls: ['./edit-usermanagement.component.css']
})
export class EditUsermanagementComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<UserManagementComponent,VenderMasterComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { 
    dialogRef.disableClose = true;
  }

  ngOnInit() {
  }

  close(){
    this.dialogRef.close();
  }
}
