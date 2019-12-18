import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private getAllUsersUrl = 'http://localhost:8080/user/findAll';
  private assignRolesUrl = 'http://localhost:8080/user/assignRoles';
  private getUserInfo = "http://localhost:8080/user/byToken"; 
  private updateUserInfo = "http://localhost:8080/user/add";
  constructor(private http: HttpClient) { }

  findAllUsers(): Observable<any> {
    return this.http.get<any>(this.getAllUsersUrl, httpOptions);
  }

  assignRolesToUser(data: any): Observable<any>{
    return this.http.post<any>(this.assignRolesUrl, data, httpOptions);
  }

  getUserData(): Observable<any> {
    return this.http.get<any>(this.getUserInfo, httpOptions);
  } 

  updateUserData(data: any): Observable<any> {
    return this.http.post<any>(this.updateUserInfo, httpOptions);
  }
}
