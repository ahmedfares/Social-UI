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
import { HttpClientModule } from '@angular/common/http';
import { GoogleChartsModule } from 'angular-google-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ItemPostComponent } from './item-post/item-post.component';
import { FollowersComponent } from './followers/followers.component';
import { UsertimelineComponent } from './usertimeline/usertimeline.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegitserComponent,
    HeaderComponent,
    ItemPostComponent,
    FollowersComponent,
    UsertimelineComponent,
    
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
    MaterialsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
