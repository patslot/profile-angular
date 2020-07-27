import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
const Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'blog', component: BlogComponent
  },
  {
    path: 'about', component: AboutComponent
  },
  {
    path: 'contact', component: ContactComponent
  },
  {
    path: '**', component: PageNotFoundComponentComponent
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
