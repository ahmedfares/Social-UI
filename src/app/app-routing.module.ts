import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegitserComponent } from './regitser/regitser.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { AuthGuard } from './auth/auth.guard';
import { ManageRolesComponent } from './admin/manage-roles/manage-roles.component';
import { FollowersComponent } from './followers/followers.component';
import { UsertimelineComponent } from './usertimeline/usertimeline.component';
import { MalpostsComponent } from './malposts/malposts.component';
import { ClaimsComponent } from './claims/claims.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { AdvertisementComponent } from './advertisement/advertisement.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'register',
    component: RegitserComponent
  },
  {
    path: 'user',
    component: UserComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_ADMIN'] }
  },
  {
    path: 'admin/manage-roles',
    component: ManageRolesComponent
  },
  {
    path: 'followers',
    component: FollowersComponent
  },
  {
    path: 'userTimeLine/:email',
    component: UsertimelineComponent
  },
  {
    path: 'malPosts',
    component: MalpostsComponent
  },
  {
    path: 'claims',
    component: ClaimsComponent
  },
  {
    path: 'post',
    component: CreatePostComponent
  },
  {
    path:'adv',
    component: AdvertisementComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{enableTracing:false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
