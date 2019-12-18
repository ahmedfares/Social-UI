import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AdService {

  constructor(private http: HttpClient) { }

  private makeAPost = "http://localhost:8080/ads/add";
  postAd(data: any) {
    return this.http.post<any>(this.makeAPost,data, httpOptions);
  }
}
