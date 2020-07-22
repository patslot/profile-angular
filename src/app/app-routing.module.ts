import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
const Routes = [
  {
    path: '', redirectTo: 'getposts', pathMatch: 'full'
  },
  {
    path: 'getposts', component: PostsComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(Routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
