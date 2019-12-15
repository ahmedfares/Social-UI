import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PrivilegeService {

  private addPrivilegeUrl = 'http://localhost:8080/privilege/add';
  private getAllPrivilegeUrl = 'http://localhost:8080/privilege/find';
  constructor(private http: HttpClient) { }

  addPrivilege(privilegeName: string): Observable<any>{
    let privilege = {name: privilegeName};
    return this.http.post<any>(this.addPrivilegeUrl, privilege, httpOptions);
  }

  getAll(): Observable<any> {
    return this.http.get<any[]>(this.getAllPrivilegeUrl, httpOptions)
  }
}
