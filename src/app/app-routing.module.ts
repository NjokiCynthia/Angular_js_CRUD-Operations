import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TenantListComponent } from './tenant-list/tenant-list.component';
import { TenantDetailsComponent } from './tenant-details/tenant-details.component';
import { CreateTenantComponent } from './create-tenant/create-tenant.component';
import { UpdateTenantComponent } from './update-tenant/update-tenant.component';

const routes: Routes = [
  
  { path: '', redirectTo: 'tenants', pathMatch: 'full' },
  { path: 'tenants', component: TenantListComponent },
  { path: 'add', component: CreateTenantComponent },
  { path: 'update/:tenant_id', component: UpdateTenantComponent },
  { path: 'details/:tenant_id', component: TenantDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
