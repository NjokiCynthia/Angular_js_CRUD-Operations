import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TenantListComponent } from './tenant-list/tenant-list.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { TenantServiceService } from './service/tenant-service.service';
import { CreateTenantComponent } from './create-tenant/create-tenant.component';
import { UpdateTenantComponent } from './update-tenant/update-tenant.component';
import { TenantDetailsComponent } from './tenant-details/tenant-details.component';

@NgModule({
  exports: [RouterModule],
  declarations: [
    AppComponent,
    TenantListComponent,
    CreateTenantComponent,
    UpdateTenantComponent,
    TenantDetailsComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DropDownListModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    NgbModule,
    FormsModule 
  ],

  providers: [TenantServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }