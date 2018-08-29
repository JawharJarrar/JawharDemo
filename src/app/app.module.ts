import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { MaterialModule } from './material';
import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PostService } from './shared/services/post.service';
import { UserService } from './shared/services/user.service';
import { AuthGuardService } from './shared/services/auth-guard.service';
import { ComponentsModule } from './shared/components/components.module';

import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { LoginComponent } from './login/login.component';
import {AddpostComponent } from './addpost/addpost.component';
import { SignupComponent } from './signup/signup.component';
import { AdduserComponent } from './adduser/adduser.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { UpdatepostComponent } from './updatepost/updatepost.component';

const appRoutes: Routes = [
  { path: 'posts/list', component: PostsListComponent, canActivate: [AuthGuardService] },
  { path: 'user/list', component: UserListComponent, canActivate: [AuthGuardService] },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'addPost', component: AddpostComponent },
  { path: 'updatePost', component: UpdatepostComponent },
  { path: 'addUser', component: AdduserComponent },
  { path: 'UpdateUser', component: UpdateuserComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
     PostsListComponent,
    LoginComponent,
    SignupComponent,
    AddpostComponent,
    AdduserComponent,
    UpdateuserComponent,
    UpdatepostComponent,
  ],

  imports: [
    MaterialModule,
    BrowserModule,
    LayoutModule,
    HttpClientModule,
    ComponentsModule,

   BrowserAnimationsModule,
   ReactiveFormsModule,



    RouterModule.forRoot(appRoutes),

  ],
  exports: [
    AppComponent,
    UserListComponent,
    PostsListComponent,
    LoginComponent,
    SignupComponent,
  ],
  providers: [UserService, PostService, AuthGuardService],
  bootstrap: [AppComponent],
})

export class AppModule {
}
