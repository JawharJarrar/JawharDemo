import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from './shared/components/material';
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
import { SignupComponent } from './signup/signup.component';

const appRoutes: Routes = [
  { path: 'posts/list', component: PostsListComponent, canActivate: [AuthGuardService] },
  { path: 'user/list', component: UserListComponent, canActivate: [AuthGuardService] },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
     PostsListComponent,
    LoginComponent,
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
    SignupComponent,
  ],
  providers: [UserService, PostService, AuthGuardService],
  bootstrap: [AppComponent],
})

export class AppModule {
}
