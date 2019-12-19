import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { PostService } from '../services/post.service';
import { AdService } from '../services/ad.service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-advertisement',
  templateUrl: './advertisement.component.html',
  styleUrls: ['./advertisement.component.scss']
})
export class AdvertisementComponent implements OnInit {

  categories;
  Cities;
  product: any = {
    title: '',
    price: '',
    category: '',
    imageUrl: ''
  };
  id;

  postForm: FormGroup;
  uploadedText = 'Choose file';
  images; 
  submitted = false;
  imageView;
  msg;
  productToEdit;

  constructor(
    private router: Router,
    private activatedRouter: ActivatedRoute,
    private apiService: ApiService,
    private formBuilder: FormBuilder) {

    this.Cities = [
      { id: 1, Name: 'FairField' },
      { id: 2, Name: 'Des Moines' },
      { id: 3, Name: 'Iowa City' }
    ]

    // this.id = route.snapshot.paramMap.get('id');
    // if (this.id) productService.get(this.id).valueChanges().take(1).subscribe(p => this.product = p);
  }

  ngOnInit() {
    this.activatedRouter.queryParams.subscribe(params => {
      const postId = params['id'];
      console.log('>> query param: ', postId)
      if (postId != null) {
        this.getPostById(postId);
      } else {
        this.createNewForm();
      }
    });

    this.getAllCateories();

  }

  createNewForm() {
    this.uploadedText = 'Choose file';
    this.imageView = null;
    this.postForm = this.formBuilder.group({
      minAge: [''],
      maxAge: [''],
      targetAddress: [''],
      photos: [[]]
    });
  }

  createUpdateForm(post) {
    const url = post.photos[0].url;
    const imageName = url.substr(url.lastIndexOf('/') + 1);
    this.uploadedText = imageName;
    this.imageView = null;
    this.postForm = this.formBuilder.group({
      id: [post.id],
      title: [post.title, Validators.required],
      description: [post.description],
      expirDate: [post.expirDate],
      minPrice: [post.minPrice, Validators.required],
      incrValue: [post.incrValue, Validators.required],
      city: [post.city],
      country: [post.country],
      category: [post.category.id, Validators.required],
      photos: [[]]

    });
  }

  getAllCateories() {
  }

  uploadFile(event) {

    console.log(' >>> upload file: ', event);
    this.uploadedText = '';
    this.images = event.target.files;
    for (let f of event.target.files) {
      this.uploadedText += f.name + ' , ';
    }
    const reader = new FileReader();
    reader.onload = e => this.imageView = reader.result;
    reader.readAsDataURL(this.images[0]);
  }

  saveAd() {
    this.submitted = true;
    let A = this.postForm.value;
    //console.log(p);
    this.addNewAdvertise(A);
  }
  addNewAdvertise(A) {
    this.apiService.saveAdvertise(A, this.images).subscribe(data => {
      console.log('>>> savedPOst: ', data);
      //this.router.navigate(['/home']);
    });
  }

  getPostById(id) {
    
  }


}
