import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  ip = "http://localhost";
  baseUrl = this.ip + ":8080";

  constructor(private http: HttpClient) { }

  getPhotoUrl(url) {
    // if (url != null) {
    //   let imagePath = url.substr(url.indexOf('/auctioneer')).replace(' ', '%20');
    //   return this.ip + imagePath;
    // }
    return url;
  }
  register(person): Observable<any> {
    return this.http.post(this.baseUrl + '/register', person, {
      responseType: 'text' as 'json'
    });
  }

  login(email, password): Observable<any> {
    let body = new FormData();
    body.append('email', email);
    body.append('password', password);
    return this.http.post(this.baseUrl + '/login', body, {
      responseType: 'json' as 'json'
    });
  }
  getAllPost(email,pageNo): Observable<any> {
    let body = new FormData();
    body.append('email', email);
    return this.http.post(this.baseUrl + '/post/allPosts/'+pageNo,email, {
      responseType: 'json' as 'json'
    });
  }
  searchAllPosts(email,pageNo,searchTxt): Observable<any> {
    let body = new FormData();
    body.append('email', email);
    return this.http.post(this.baseUrl + '/post/searchAllPosts/'+pageNo+'/'+searchTxt,email, {
      responseType: 'json' as 'json'
    });
  }
  getUserPost(email,pageNo): Observable<any> {
    let body = new FormData();
    body.append('email', email);
    return this.http.post(this.baseUrl + '/post/userPosts/'+pageNo,email, {
      responseType: 'json' as 'json'
    });
  }
  searchUserPosts(email,pageNo,searchTxt): Observable<any> {
    let body = new FormData();
    body.append('email', email);
    return this.http.post(this.baseUrl + '/post/searchUserPosts/'+pageNo+'/'+searchTxt,email, {
      responseType: 'json' as 'json'
    });
  }
  addComment(postId,comment): Observable<any> {
    let body = new FormData();
    return this.http.post(this.baseUrl + '/post/addComment/'+postId+'/'+comment,body, {
      responseType: 'json' as 'json'
    });
  }
  addLike(postId): Observable<any> {
    let body = new FormData();
    return this.http.post(this.baseUrl + '/post/addLike/'+postId,body, {
      responseType: 'json' as 'json'
    });
  }
  removeLike(postId): Observable<any> {
    let body = new FormData();
    return this.http.post(this.baseUrl + '/post/removeLike/'+postId,body, {
      responseType: 'json' as 'json'
    });
  }
  
  getAllFollowers(email): Observable<any> {
    let body = new FormData();
    body.append('email', email);
    return this.http.post(this.baseUrl + '/user/GetFollowings/',email, {
      responseType: 'json' as 'json'
    });
  }
  
  addNewFollower(userEmail,followerEmail): Observable<any> {
    let body = new FormData();
    return this.http.post(this.baseUrl + '/user/AddFollowing/'+userEmail+'/'+followerEmail,body, {
      responseType: 'json' as 'json'
    });
  }
  deleteFollower(userEmail,followerEmail): Observable<any> {
    let body = new FormData();
    return this.http.post(this.baseUrl + '/user/DeleteFollowing/'+userEmail+'/'+followerEmail,body, {
      responseType: 'json' as 'json'
    });
  }
}
