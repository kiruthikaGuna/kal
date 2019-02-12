import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material';
import { ProductMasterComponent } from '../../product-master/product-master.component';


@Component({
  selector: 'app-edit-product-master',
  templateUrl: './edit-product-master.component.html',
  styleUrls: ['./edit-product-master.component.css']
})
export class EditProductMasterComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ProductMasterComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: any) 
    {
      dialogRef.disableClose = true;
     }

  ngOnInit() {
  }

 
  close(){
    this.dialogRef.close();
  }

}
