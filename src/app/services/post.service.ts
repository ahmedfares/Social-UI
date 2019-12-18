import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  private makeAPost = "http://localhost:8080/post/add";
  makePost(data: any) {
    return this.http.post<any>(this.makeAPost,data, httpOptions);
  }
}
