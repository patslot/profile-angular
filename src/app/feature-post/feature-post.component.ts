import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-feature-post',
  templateUrl: './feature-post.component.html',
  styleUrls: ['./feature-post.component.scss']
})
export class FeaturePostComponent implements OnInit {
  featureposts: any = [] ;
  constructor(private postService: PostsService) { }

  ngOnInit(): void {
    this.postService.getFeaturePosts().subscribe(posts => {
      this.featureposts = posts
      console.log(this.featureposts);
    });
  }

}
