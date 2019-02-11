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
import { AddUsermanagementComponent } from './admin/popup/add-usermanagement/add-usermanagement.component';
import { EditUsermanagementComponent } from './admin/popup/edit-usermanagement/edit-usermanagement.component';
import { ConsignmentalDetailComponent } from './admin/consignmental-detail/consignmental-detail.component';
import { ChangePasswordComponent } from './setting/change-password/change-password.component';

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
      { path: 'add_userMagagement', component: AddUsermanagementComponent, data: { 'title': 'add_userMagagement' } },
      { path: 'edit_userMagagement', component: EditUsermanagementComponent, data: { 'title': 'edit_userMagagement' } },
      { path: 'Consignmental_Detail', component: ConsignmentalDetailComponent, data: { 'title': 'Consignmental_Detail' } },
      { path: 'changepassword', component: ChangePasswordComponent, data: { 'title': 'changepassword' } },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }