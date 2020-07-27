import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
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
}
