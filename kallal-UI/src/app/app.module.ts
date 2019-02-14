import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { jqxBarGaugeComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxbargauge';
import { ChartsModule } from 'ng2-charts';
import {ReactiveFormsModule} from '@angular/forms';
import { MatTabsModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './authentication/login/login.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { MenuComponent } from './menu/menu.component';
import { SideNavComponent } from './menu/side-nav/side-nav.component';
import { HomeComponent } from './home/home.component';
import { AuthGuardService } from './guards/auth-guard.service';
import { ForgotPasswordComponent } from './authentication/forgot-password/forgot-password.component';
import { AdminComponent } from './admin/admin.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { UserManagementComponent } from './admin/user-management/user-management.component';
import { VenderMasterComponent } from './admin/vender-master/vender-master.component';
import { DispatchMasterComponent } from './admin/dispatch-master/dispatch-master.component';
import { WarehouseMasterComponent } from './admin/warehouse-master/warehouse-master.component';
import { StructureMasterComponent } from './admin/structure-master/structure-master.component';
import { ProductMasterComponent } from './admin/product-master/product-master.component';
import { QualityMasterComponent } from './admin/quality-master/quality-master.component';
import { BigMasterComponent } from './admin/big-master/big-master.component';
import { CurrencyMasterComponent } from './admin/currency-master/currency-master.component';
import { ApprovelComponent } from './admin/approvel/approvel.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { PopupComponent } from './admin/popup/popup.component';
import { EditUsermanagementComponent } from './admin/popup/edit-usermanagement/edit-usermanagement.component';
import { SettingComponent } from './setting/setting.component';
import { ChangePasswordComponent } from './setting/change-password/change-password.component';
import { ConsignmentalDetailComponent } from './admin/consignmental-detail/consignmental-detail.component';
import { ConsignmentWeightComponent } from './admin/consignment-weight/consignment-weight.component';
import { MatCardModule } from '@angular/material/card';
import { UserManagementAddComponent } from './admin/user-management-add/user-management-add.component';
import { VendorMasterAddComponent } from './admin/vendor-master-add/vendor-master-add.component';
import { DispatchMasetrAddComponent } from './admin/dispatch-masetr-add/dispatch-masetr-add.component';
import { WareHouseAddComponent } from './admin/ware-house-add/ware-house-add.component';
import { StructureMasterAddComponent } from './admin/structure-master-add/structure-master-add.component';
import { ProductMasterAddComponent } from './admin/product-master-add/product-master-add.component';
import { QualityMaseterAddComponent } from './admin/quality-maseter-add/quality-maseter-add.component';
import { BagMasterAddComponent } from './admin/bag-master-add/bag-master-add.component';
import { EditVendorMasterComponent } from './admin/popup/edit-vendor-master/edit-vendor-master.component';
import { EditStructureMasterComponent } from './admin/popup/edit-structure-master/edit-structure-master.component';
import { EditProductMasterComponent } from './admin/popup/edit-product-master/edit-product-master.component';
import { EditQualityMasterComponent } from './admin/popup/edit-quality-master/edit-quality-master.component';
import { EditBagMasterComponent } from './admin/popup/edit-bag-master/edit-bag-master.component';
import { EditWarehouseMasterComponent } from './admin/popup/edit-warehouse-master/edit-warehouse-master.component';
import { EditDispatchMasterComponent } from './admin/popup/edit-dispatch-master/edit-dispatch-master.component';
import { EditCurrencyMasterComponent } from './admin/popup/edit-currency-master/edit-currency-master.component';
import { CurrencyMasterAddComponent } from './admin/currency-master-add/currency-master-add.component';
import { jqxChartComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxchart';
import { WarehouseComponent } from './warehouse/warehouse.component';
import { TransportListComponent } from './warehouse/transport-list/transport-list.component';
import { VehicleDetailsComponent } from './warehouse/vehicle-details/vehicle-details.component';
import { ScanComponent } from './warehouse/scan/scan.component';
import { RepackingComponent } from './warehouse/repacking/repacking.component';
import { ShippingComponent } from './warehouse/shipping/shipping.component';
import { StructuresComponent } from './warehouse/structures/structures.component';
import { TransportHistoryComponent } from './warehouse/transport-history/transport-history.component';
import { TransportDetailsComponent } from './warehouse/transport-details/transport-details.component';
import { MatNativeDateModule } from '@angular/material';
import { InvoiceComponent } from './warehouse/invoice/invoice.component';
import { StorebagComponent } from './warehouse/popup/storebag/storebag.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AuthenticationComponent,
    MenuComponent,
    SideNavComponent,
    HomeComponent,
    DashboardComponent,
    ForgotPasswordComponent,
    AdminComponent,
    UserManagementComponent,
    VenderMasterComponent,
    DispatchMasterComponent,
    WarehouseMasterComponent,
    StructureMasterComponent,
    ProductMasterComponent,
    QualityMasterComponent,
    BigMasterComponent,
    CurrencyMasterComponent,
    ApprovelComponent,
    PopupComponent,
    EditUsermanagementComponent,
    SettingComponent,
    ChangePasswordComponent,
    ConsignmentalDetailComponent,
    ConsignmentWeightComponent,
    UserManagementAddComponent,
    VendorMasterAddComponent,
    DispatchMasetrAddComponent,
    WareHouseAddComponent,
    StructureMasterAddComponent,
    ProductMasterAddComponent,
    QualityMaseterAddComponent,
    BagMasterAddComponent,
    EditVendorMasterComponent,
    EditStructureMasterComponent,
    EditProductMasterComponent,
    EditQualityMasterComponent,
    EditBagMasterComponent,
    CurrencyMasterAddComponent ,
    EditWarehouseMasterComponent,
    EditDispatchMasterComponent,
    EditCurrencyMasterComponent,
    CurrencyMasterAddComponent,
    jqxBarGaugeComponent,
    jqxChartComponent,
    WarehouseComponent,
    TransportListComponent,
    VehicleDetailsComponent,
    ScanComponent,
    RepackingComponent,
    ShippingComponent,
    StructuresComponent,
    TransportHistoryComponent,
    TransportDetailsComponent,
    InvoiceComponent,
    StorebagComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ReactiveFormsModule,
// tslint:disable-next-line: deprecation
    NgbModule.forRoot(),
    MatSelectModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatInputModule,
    MatCardModule,
    ChartsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTabsModule
  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
