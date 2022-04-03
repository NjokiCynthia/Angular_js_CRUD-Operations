import { Component, OnInit } from '@angular/core';
import { Tenants } from '../model/tenants';
import { TenantServiceService } from '../service/tenant-service.service';
import { TenantListComponent } from '../tenant-list/tenant-list.component';
import { Router, ActivatedRoute } from '@angular/router';
import { UpdateTenantComponent } from '../update-tenant/update-tenant.component';

@Component({
  selector: 'app-tenant-details',
  templateUrl: './tenant-details.component.html',
  styleUrls: ['./tenant-details.component.css']
})
export class TenantDetailsComponent implements OnInit {

  tenant_id: BigInt;
  tenants: Tenants;

  constructor(private route: ActivatedRoute,private router: Router,
    private tenantServiceService: TenantServiceService) { }

  ngOnInit(): void {
    this.tenants = new Tenants();

    this.tenant_id = this.route.snapshot.params['tenant_id'];
    
    this.tenantServiceService.getTenant(this.tenant_id)
      .subscribe(data => {
        console.log(data)
        this.tenants = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['tenants']);
  }
  // updateTenant(){
  //   this.router.navigate(['update']);
  // }
  updateTenant(tenant_id: BigInt){
    console.log(tenant_id);
    // this.router.navigate(['update']);
    this.router.navigate(['update', tenant_id]);
  }
}
