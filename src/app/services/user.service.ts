import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from '../auth/token-storage.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  ip = "http://localhost";
  baseUrl = this.ip + ":8080";

  private getAllUsersUrl = 'http://localhost:8080/user/findAll';
  private assignRolesUrl = 'http://localhost:8080/user/assignRoles';
  private getUserInfo = "http://localhost:8080/user/byToken"; 
  private updateUserInfo = "http://localhost:8080/user/add";
  constructor(private http: HttpClient,private token: TokenStorageService) { }

  findAllUsers(): Observable<any> {
    return this.http.get<any>(this.getAllUsersUrl, httpOptions);
  }

  assignRolesToUser(data: any): Observable<any>{
    return this.http.post<any>(this.assignRolesUrl, data, httpOptions);
  }

  getUserData(): Observable<any> {
    return this.http.get<any>(this.getUserInfo, httpOptions);
  } 

  updateUserData(user, images): Observable<any> {

    const token = this.token.getToken();
    let headers = new HttpHeaders({
      'Authorization': token
    });
    const options = { responseType: 'text' as 'json', headers };
    let body = new FormData();
    for (let image of images) {
      body.append('images', image);
    }
    body.append("user", new Blob([JSON.stringify(user)],
      {
        type: "application/json"
      }));
    return this.http.post(this.baseUrl + '/user/add', body,options);
  }
}
