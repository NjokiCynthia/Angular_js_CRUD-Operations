import { Component, OnInit } from '@angular/core';
import { Tenants } from '../model/tenants';
import { TenantServiceService } from '../service/tenant-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-tenant',
  templateUrl: './create-tenant.component.html',
  styleUrls: ['./create-tenant.component.css']
})
export class CreateTenantComponent implements OnInit {

  
  tenants: Tenants = new Tenants();
  submitted = false;

  constructor(private tenantServiceService: TenantServiceService,
    private router: Router) { }

  ngOnInit(): void {
  }
  newTenant(): void {
    this.submitted = false;
    this.tenants = new Tenants();
  }

  save() {
    this.tenantServiceService
    .createTenant(this.tenants).subscribe(data => {
      console.log(data)
      this.tenants = new Tenants();
      this.gotoList();
    }, 
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/tenants']);
  }
}
