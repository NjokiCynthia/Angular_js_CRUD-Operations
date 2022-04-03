import { Component, OnInit } from '@angular/core';
import { Tenants } from '../model/tenants';
import { ActivatedRoute, Router } from '@angular/router';
import { TenantServiceService } from '../service/tenant-service.service';

@Component({
  selector: 'app-update-tenant',
  templateUrl: './update-tenant.component.html',
  styleUrls: ['./update-tenant.component.css']
})
export class UpdateTenantComponent implements OnInit {

  tenant_id: BigInt;
  tenants: Tenants;

  constructor(private route: ActivatedRoute,private router: Router,
    private tenantServiceService: TenantServiceService) { }

  ngOnInit(): void {
    this.tenants = new Tenants();

    this.tenant_id = this.route.snapshot.params['tenant_id'];
    
    this.tenantServiceService.getTenant(this.tenant_id)
    .subscribe(data => {
     console.log(this.tenant_id)
     this.tenants = data;
      }, error => console.log(error));
  }

  updateTenant(tenant: Tenants) {
    this.tenantServiceService.updateTenant(tenant, this.tenant_id)
      .subscribe(data => {
        console.log(data);
       // this.tenants = new Tenants();
      //    this.tenantServiceService.getTenantList().subscribe((data: Tenants[])=>{
      // this.tenants = data;
      // console.log(this.tenants);
        this.gotoList();
      }, error => console.log(error));
  }
  onSubmit(tenant: Tenants) {
    this.updateTenant(tenant);    
  }

  gotoList() {
    this.router.navigate(['/tenants']);
  }
}
