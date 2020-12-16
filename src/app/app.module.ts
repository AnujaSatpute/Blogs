import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './auth/login/login.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddPostComponent } from './add-post/add-post.component';
import { EditorModule } from '@tinymce/tinymce-angular';
import { RegisterComponent } from './auth/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { HomeComponent } from './home/home.component';
import { RegisterSuccessComponent } from './register-success/register-success.component';
import { PostComponent } from './post/post.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { DraftComponent } from './draft/draft.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    AddPostComponent,
    RegisterComponent,
    HomeComponent,
    RegisterSuccessComponent,
    PostComponent,
    UpdateProfileComponent,
    DraftComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    EditorModule,
    NgxWebstorageModule.forRoot(),
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'login', component: LoginComponent },
      { path: 'add-post', component: AddPostComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'home', component: HomeComponent },
      { path: 'post/:id', component: PostComponent },
      { path: 'update-profile', component: UpdateProfileComponent },
      { path: 'draft', component: DraftComponent },
      { path: 'register-success', component: RegisterSuccessComponent }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }