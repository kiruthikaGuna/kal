import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';


import { AppRoutingModule } from './app-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
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
import { AddUsermanagementComponent } from './admin/popup/add-usermanagement/add-usermanagement.component';
import { EditUsermanagementComponent } from './admin/popup/edit-usermanagement/edit-usermanagement.component';
import { SettingComponent } from './setting/setting.component';
import { ChangePasswordComponent } from './setting/change-password/change-password.component';
import { ConsignmentalDetailComponent } from './admin/consignmental-detail/consignmental-detail.component';
import { MatCardModule } from '@angular/material/card';

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
    AddUsermanagementComponent,
    EditUsermanagementComponent,
    SettingComponent,
    ChangePasswordComponent,
    ConsignmentalDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule.forRoot(),
    MatSelectModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatInputModule,
    MatCardModule
  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }