import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from './auth/token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  ip = "http://localhost";
  baseUrl = this.ip + ":8080";
  webSocketPath = this.baseUrl + '/gkz-stomp-endpoint';

  constructor(private http: HttpClient,private token: TokenStorageService) { }

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

  addClaim(user,msg): Observable<any> {
    let body = new FormData();
    return this.http.post(this.baseUrl + '/user/addClaim/'+msg,user, {
      responseType: 'json' as 'json'
    });
  }
  getAllClaims(): Observable<any> {
    return this.http.get(this.baseUrl + '/ClaimList', {
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
  getAllMalPosts(): Observable<any> {
    return this.http.get(this.baseUrl + '/post/blockedPost/', {
      responseType: 'json' as 'json'
    });
  }
  getAds(): Observable<any> {
    return this.http.get(this.baseUrl + '/ads/get/', {
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
  create(product){
    //this.db.list('/products').push(product);
  }
  
  saveAdvertise(advertise, images): Observable<any> {

    const token = this.token.getToken();
    let headers = new HttpHeaders({
      'Authorization': token
    });
    const options = { responseType: 'text' as 'json', headers };
    let body = new FormData();
    for (let image of images) {
      body.append('images', image);
    }
    body.append("advertise", new Blob([JSON.stringify(advertise)],
      {
        type: "application/json"
      }));
    return this.http.post(this.baseUrl + '/ads/add', body,options);
  }
  savePost(post, images): Observable<any> {

    const token = this.token.getToken();
    let headers = new HttpHeaders({
      'Authorization': token
    });
    const options = { responseType: 'text' as 'json', headers };
    let body = new FormData();
    let postObj ={body : post.title};
    for (let image of images) {
      body.append('images', image);
    }
    body.append("post", new Blob([JSON.stringify(postObj)],
      {
        type: "application/json"
      }));
    return this.http.post(this.baseUrl + '/post/add', body,options);
  }
  enablePost(post): Observable<any> {
    let body = new FormData();
    return this.http.post(this.baseUrl + '/post/ignorePost?postId='+post.id,post.id, {
      responseType: 'json' as 'json'
    });
  }
  activateUser(post): Observable<any> {
    let body = new FormData();
    return this.http.post(this.baseUrl + '/activateClaim?userId='+post.user.id,post.user.id, {
      responseType: 'json' as 'json'
    });
  }
  ignoreUser(post): Observable<any> {
    let body = new FormData();
    return this.http.delete(this.baseUrl + '/ignoreClaim?userId='+post.user.id,post.user.id);
  }

  disablePost(post): Observable<any> {
    let body = new FormData();
    return this.http.post(this.baseUrl + '/post/deactivatePost?postId='+post.id,post.id, {
      responseType: 'json' as 'json'
    });
  }
}
