import { MaterialsModule } from './materials/materials.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegitserComponent } from './regitser/regitser.component';
import { HeaderComponent } from './header/header.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { GoogleChartsModule } from 'angular-google-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserComponent } from './user/user.component';
import { ManageRolesComponent } from './admin/manage-roles/manage-roles.component';
import { MatInputModule, MatFormFieldModule, MatSelectModule, MatAutocompleteModule } from '@angular/material';
import { AuthInterceptor } from './auth/auth-interceptor';
import { ItemPostComponent } from './item-post/item-post.component';
import { FollowersComponent } from './followers/followers.component';
import { UsertimelineComponent } from './usertimeline/usertimeline.component';
import { MalpostsComponent } from './malposts/malposts.component';
import { ClaimsComponent } from './claims/claims.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { CreateAdvertisementComponent } from './create-advertisement/create-advertisement.component';
import { AdvertisementComponent } from './advertisement/advertisement.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegitserComponent,
    HeaderComponent,
    UserComponent,
    ManageRolesComponent,
    ItemPostComponent,
    FollowersComponent,
    UsertimelineComponent,
    MalpostsComponent,
    ClaimsComponent,
    CreatePostComponent,
    CreateAdvertisementComponent,
    AdvertisementComponent,
    
  ],
  imports: [
    GoogleChartsModule.forRoot(),
    AngularFontAwesomeModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatAutocompleteModule
    
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
