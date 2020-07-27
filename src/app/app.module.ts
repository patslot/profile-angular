import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { environment } from 'src/environments/environment';

import { PostsComponent } from './posts/posts.component';

import { PostsService } from './posts.service';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { PageheaderComponent } from './pageheader/pageheader.component';
import { PagecontentComponent } from './pagecontent/pagecontent.component';
import { FooterComponent } from './footer/footer.component';
import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';
import { FeaturePostComponent } from './feature-post/feature-post.component';


@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PageNotFoundComponentComponent,
    NavbarComponent,
    HomeComponent,
    ContactComponent,
    PageheaderComponent,
    PagecontentComponent,
    FooterComponent,
    BlogComponent,
    AboutComponent,
    FeaturePostComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AppRoutingModule
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
