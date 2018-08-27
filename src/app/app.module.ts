import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { LoginComponent } from './login/login.component';
import { SinglepostComponent } from './singlepost/singlepost.component';
import { SignupComponent } from './signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from './material';
import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{ ComponentsModule } from './shared/components/components.module';
import { PostService } from './post.service';
import { UserService } from './user.service';





const appRoutes: Routes = [
  { path: 'user/list', component: UserListComponent },
  { path: 'posts/list', component: PostsListComponent },
 // { path: '',  redirectTo:'login', pathMatch: 'full' },

  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },







];

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    PostsListComponent,
    LoginComponent,
    SinglepostComponent,
    SignupComponent,

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
    SinglepostComponent,
    SignupComponent,
  ]
  ,
  providers: [UserService, PostService],
  bootstrap: [AppComponent],


})

export class AppModule {



 }
