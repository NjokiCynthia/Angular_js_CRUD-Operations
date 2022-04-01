import { Component, OnInit } from '@angular/core';
import { Tenants } from '../model/tenants';
import { TenantServiceService } from '../service/tenant-service.service';
import { TenantDetailsComponent } from '../tenant-details/tenant-details.component';
import { Observable } from "rxjs";
import { Router } from '@angular/router';

@Component({
  selector: 'app-tenant-list',
  templateUrl: './tenant-list.component.html',
  styleUrls: ['./tenant-list.component.css']
})
export class TenantListComponent implements OnInit {

   tenants: Tenants[] = [];
  //tenants: Observable<Tenants[]>;
  

  constructor(private tenantServiceService: TenantServiceService,
     private router: Router)  { }
  
  // ngOnInit() {
  //   this.reloadData();
  // }
  ngOnInit(): void {
    document.body.className = "selector";
    this.tenantServiceService.getTenantList().subscribe((data: Tenants[])=>{
      this.tenants = data;
      console.log(this.tenants);
    })  
  }
  
  deleteTenant(tenant_id: BigInt){
      if(confirm("Are you sure to delete " + tenant_id)) {
        console.log(
         // this.tenantServiceService.deleteTenant(tenant_id).subscribe(res => {
            this.tenants = this.tenants.filter(item => item.tenant_id !== tenant_id));
            console.log('Tenant deleted successfully!');
       }
     
      }
   

  tenantDetails(tenant_id:BigInt){
    this.router.navigate(['details', tenant_id]);
  }
 
}
  
 // reloadData() {
  //  this.tenantServiceService.getTenantList().subscribe(
  //     data => {             
  //       this.tenants=data;
  //       console.log(this.tenants)
  //     }, 
  //     error=>{
  //     }
  //   )
  // }
