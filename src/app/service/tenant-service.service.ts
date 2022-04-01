import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Tenants }from '../model/tenants';


@Injectable({
  providedIn: 'root'
})
export class TenantServiceService {
 
  private tenantsUrl = 'http://localhost:8080/tenants/tenant';

  constructor(private http: HttpClient) {}

  createTenant(tenants: any): Observable<any> {
    return this.http.post(`${this.tenantsUrl}/add`, tenants);
  }
 
 updateTenant( value: any): Observable<any> {
    return this.http.put(`${this.tenantsUrl}/update`, value);
  }
//   updateData(data: any, id: string): Observable<any> {tenant_id: BigInt,
//     return this.http.patch(`${this.baseURL}/update/${id}`, data)
// }

  deleteTenant(tenant_id: BigInt): Observable<any> {
    return this.http.delete(`${this.tenantsUrl}/all/${tenant_id}`, { responseType: 'text' });
  }

  getTenantList(): Observable<Tenants[]> {
    return this.http.get<Tenants[]>(`${this.tenantsUrl}/all`);
  }
  getTenant(tenant_id: BigInt): Observable<any> {
    //return this.http.get(`${this.tenantsUrl}/all/${tenant_id}`);
    return this.http.get<Tenants[]>(`${this.tenantsUrl}/all/${tenant_id}`);
  }

}