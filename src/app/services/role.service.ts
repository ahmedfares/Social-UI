import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  private addRoleUrl = 'http://localhost:8080/role/add';
  private getAllRoleUrl = 'http://localhost:8080/role/find';

  constructor(private http: HttpClient) { }

  addRole(role: any): Observable<any> {
    return this.http.post<any>(this.addRoleUrl, role, httpOptions);
  }

  findAllRole(): Observable<any> {
    return this.http.get<any>(this.getAllRoleUrl, httpOptions);
  }
}
