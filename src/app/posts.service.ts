import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, filter} from 'rxjs/operators';
import { Observable, pipe } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';


@Injectable({
  providedIn: 'root'
})
export class PostsService {
  offers: Observable<any[]>;
  constructor(private db: AngularFireDatabase) {
    this.offers = db.list('offers').valueChanges();
   }
  getAllPosts(){
    return  this.offers;
  }
  getFeaturePosts(){
    return this.offers
    .pipe(
      map(s => s.sort( (a,b) => ( new Date(a.date).getTime() < new Date(b.date).getTime() ) ? 1 : -1 ))
    )
    .pipe(
      map(s => s.filter(s => s.feature == 1)))
    ;
  }
}
