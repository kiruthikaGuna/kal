import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { AuthGuardService } from './guards/auth-guard.service';
import { HomeComponent } from './home/home.component';
import { SideNavComponent } from './menu/side-nav/side-nav.component';
import { ForgotPasswordComponent } from './authentication/forgot-password/forgot-password.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ApprovelComponent } from './admin/approvel/approvel.component';
import { BigMasterComponent } from './admin/big-master/big-master.component';
import { CurrencyMasterComponent } from './admin/currency-master/currency-master.component';
import { DispatchMasterComponent } from './admin/dispatch-master/dispatch-master.component';
import { ProductMasterComponent } from './admin/product-master/product-master.component';
import { QualityMasterComponent } from './admin/quality-master/quality-master.component';
import { StructureMasterComponent } from './admin/structure-master/structure-master.component';
import { UserManagementComponent } from './admin/user-management/user-management.component';
import { VenderMasterComponent } from './admin/vender-master/vender-master.component';
import { WarehouseMasterComponent } from './admin/warehouse-master/warehouse-master.component';
import { EditUsermanagementComponent } from './admin/popup/edit-usermanagement/edit-usermanagement.component';
import { ConsignmentalDetailComponent } from './admin/consignmental-detail/consignmental-detail.component';
import { ConsignmentWeightComponent } from './admin/consignment-weight/consignment-weight.component';
import { ChangePasswordComponent } from './setting/change-password/change-password.component';
import { UserManagementAddComponent } from './admin/user-management-add/user-management-add.component';
import { VendorMasterAddComponent } from './admin/vendor-master-add/vendor-master-add.component';
import { DispatchMasetrAddComponent } from './admin/dispatch-masetr-add/dispatch-masetr-add.component';
import { WareHouseAddComponent } from './admin/ware-house-add/ware-house-add.component';
import { StructureMasterAddComponent } from './admin/structure-master-add/structure-master-add.component';
import { ProductMasterAddComponent } from './admin/product-master-add/product-master-add.component';
import { QualityMaseterAddComponent } from './admin/quality-maseter-add/quality-maseter-add.component';
import { BagMasterAddComponent } from './admin/bag-master-add/bag-master-add.component';
import { CurrencyMasterAddComponent } from './admin/currency-master-add/currency-master-add.component';
import { EditBagMasterComponent } from './admin/popup/edit-bag-master/edit-bag-master.component';
import { EditCurrencyMasterComponent } from './admin/popup/edit-currency-master/edit-currency-master.component';
import { EditDispatchMasterComponent } from './admin/popup/edit-dispatch-master/edit-dispatch-master.component';
import { EditProductMasterComponent } from './admin/popup/edit-product-master/edit-product-master.component';
import { EditQualityMasterComponent } from './admin/popup/edit-quality-master/edit-quality-master.component';
import { EditStructureMasterComponent } from './admin/popup/edit-structure-master/edit-structure-master.component';
import { EditVendorMasterComponent } from './admin/popup/edit-vendor-master/edit-vendor-master.component';
import { EditWarehouseMasterComponent } from './admin/popup/edit-warehouse-master/edit-warehouse-master.component';
import { RepackingComponent } from './warehouse/repacking/repacking.component';
import { ScanComponent } from './warehouse/scan/scan.component';
import { ShippingComponent } from './warehouse/shipping/shipping.component';
import { StructuresComponent } from './warehouse/structures/structures.component';
import { TransportHistoryComponent } from './warehouse/transport-history/transport-history.component';
import { TransportListComponent } from './warehouse/transport-list/transport-list.component';
import { VehicleDetailsComponent } from './warehouse/vehicle-details/vehicle-details.component';
import { TransportDetailsComponent } from './warehouse/transport-details/transport-details.component';
import { ConsignmentSearchComponent } from './admin/popup/consignment-search/consignment-search.component';
import { InvoiceComponent } from './warehouse/invoice/invoice.component';
import { StorebagComponent } from './warehouse/popup/storebag/storebag.component';


const routes: Routes = [
  { path: '', redirectTo: '/authentication', pathMatch: 'full' },
  {
    path: 'authentication', component: AuthenticationComponent,
    children: [
      { path: '', component: LoginComponent, data: { title: 'Login' } },
      { path: 'forgot-password', component: ForgotPasswordComponent, data: { title: 'forgot-password' } }
    ]
  },
  {
    path: 'home', component: HomeComponent, data: { 'title': 'Home' }, canActivate: [AuthGuardService],
    children: [
      { path: 'dashboard', component: DashboardComponent, data: { 'title': 'Board' } },
      { path: 'menu', component: SideNavComponent, data: { 'title': 'Menu Bar' } },
      { path: 'Approvel', component: ApprovelComponent, data: { 'title': 'Approvel' } },
      { path: 'Big_Master', component: BigMasterComponent, data: { 'title': 'Big_Master' } },
      { path: 'Currency_Master', component: CurrencyMasterComponent, data: { 'title': 'Currency_Master' } },
      { path: 'Dispatch_Master', component: DispatchMasterComponent, data: { 'title': 'Dispatch_Master' } },
      { path: 'Product_Master', component: ProductMasterComponent, data: { 'title': 'Product_Master' } },
      { path: 'Quality_Master', component: QualityMasterComponent, data: { 'title': 'Quality_Master' } },
      { path: 'Structure_Master', component: StructureMasterComponent, data: { 'title': 'Structure_Master' } },
      { path: 'User_Management', component: UserManagementComponent, data: { 'title': 'User_Management' } },
      { path: 'Vender_Master', component: VenderMasterComponent, data: { 'title': 'Vender_Master' } },
      { path: 'Warehouse_Master', component: WarehouseMasterComponent, data: { 'title': 'Warehouse_Master' } },
      { path: 'edit_userMagagement', component: EditUsermanagementComponent, data: { 'title': 'edit_userMagagement' } },
      { path: 'Consignmental_Detail', component: ConsignmentalDetailComponent, data: { 'title': 'Consignmental_Detail' } },
      { path: 'consignmentWeight', component: ConsignmentWeightComponent, data: { 'title': 'consignmentWeight' } },
      { path: 'changepassword', component: ChangePasswordComponent, data: { 'title': 'changepassword' } },
      { path: 'user_Management_add', component: UserManagementAddComponent, data: { 'title': 'user_Management_add' } },
      { path: 'vendorMaster_add', component: VendorMasterAddComponent, data: { 'title': 'vendorMaster_add' } },
      { path: 'warehouse_add', component: WareHouseAddComponent, data: { 'title': 'warehouse_add' } },
      { path: 'structureMaster_add', component: StructureMasterAddComponent, data: { 'title': 'structureMaster_add' } },
      { path: 'productMaster_add', component: ProductMasterAddComponent, data: { 'title': 'productMaster_add' } },
      { path: 'QualityMaster_add', component: QualityMaseterAddComponent, data: { 'title': 'QualityMaster_add' } },
      { path: 'BagMaster_add', component: BagMasterAddComponent, data: { 'title': 'BagMaster_add' } },
      { path: 'currencyMaster_add', component: CurrencyMasterAddComponent, data: { 'title': 'currencyMaster_add' } },
      { path: 'dispatch_add', component: DispatchMasetrAddComponent, data: { 'title': 'dispatch_add' } },
      { path: 'editBagMaster', component: EditBagMasterComponent, data: { 'title': 'editBagMaster' } },
      { path: 'editcurrencyMaster', component: EditCurrencyMasterComponent, data: { 'title': 'editcurrencyMaster' } },
      { path: 'editdispatchMaaster', component: EditDispatchMasterComponent, data: { 'title': 'editdispatchMaaster' } },
      { path: 'editproductMaster', component: EditProductMasterComponent, data: { 'title': 'editproductMaster' } },
      { path: 'editqualityMaster', component: EditQualityMasterComponent, data: { 'title': 'editqualityMaster' } },
      { path: 'editstructureMaster', component: EditStructureMasterComponent, data: { 'title': 'editstructureMaster' } },
      { path: 'editvendorMaster', component: EditVendorMasterComponent, data: { 'title': 'editvendorMaster' } },
      { path: 'editwarehouseMaster', component: EditWarehouseMasterComponent, data: { 'title': 'editwarehouseMaster' } },
      { path: 'Repacking', component: RepackingComponent, data: { 'title': 'Repacking' } },
      { path: 'Scan', component: ScanComponent, data: { 'title': 'Scan' } },
      { path: 'Shipping', component: ShippingComponent, data: { 'title': 'Shipping' } },
      { path: 'Structures', component: StructuresComponent, data: { 'title': 'Structures' } },
      { path: 'TransportHistory', component: TransportHistoryComponent, data: { 'title': 'TransportHistory' } },
      { path: 'TransportList', component: TransportListComponent, data: { 'title': 'TransportList' } },
      { path: 'VehicleDetails', component: VehicleDetailsComponent, data: { 'title': 'VehicleDetails' } },
      { path: 'TransportDetails', component: TransportDetailsComponent, data: { 'title': 'TransportDetails' } },
      { path: 'ConsignmentSearch', component: ConsignmentSearchComponent, data: { 'title': 'ConsignmentSearch' } },
      { path: 'Invoice', component: InvoiceComponent, data: { 'title': 'Invoice' } },
      { path: 'Strorebag', component: StorebagComponent, data: { 'title': 'Strorebag' } },
   ]
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
