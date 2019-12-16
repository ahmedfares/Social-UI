import { Component, OnInit,Input } from '@angular/core';
import { ApiService } from '../api.service';
import { TokenStorageService } from '../auth/token-storage.service';

@Component({
  selector: 'app-item-post',
  templateUrl: './item-post.component.html',
  styleUrls: ['./item-post.component.scss']
})
export class ItemPostComponent implements OnInit {

  @Input('product') product: any;
    constructor(public apiService:ApiService, private token: TokenStorageService) { }

  ngOnInit() {
    this.product.isLiked = this.product.likes.find(x=>x.user.email == this.token.getEmail()); 
  }

  likePost() {
    this.product.isLiked = !this.product.isLiked;
    if(this.product.isLiked)
    {
      this.apiService.addLike(this.product.id).subscribe(data => {
        this.product.likes.push({});        
      });
    }
    else
    {
      this.apiService.removeLike(this.product.id).subscribe(data => {
        this.product.likes.splice(0,1);
      });
    }
  }
  commentPost() {
    this.product.isCommented = !this.product.isCommented;
  }
  addComment(text){
    this.apiService.addComment(this.product.id,text).subscribe(data => {
      this.product.comments.push({body:text,user:{firstName:'User',lastName:'Name',createdDate:'2019-08-01'}});
      this.product.isCommented = true;
    });
    
  }
}
