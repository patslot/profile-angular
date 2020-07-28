import { Component, OnInit } from '@angular/core';
declare var jQuery: any;

@Component({
  selector: 'app-pagecontent',
  templateUrl: './pagecontent.component.html',
  styleUrls: ['./pagecontent.component.scss']
})
export class PagecontentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    (function ($) {
      $(document).ready(function(){
        var containerBricks = $('.masonry');
        containerBricks.imagesLoaded(function () {
            containerBricks.masonry({
                itemSelector: '.masonry__brick',
                percentPosition: true,
                resize: true
            });
        });
        // layout Masonry after each image loads
        containerBricks.imagesLoaded().progress( function() {
            containerBricks.masonry('layout');
        });
      });
    })(jQuery);

  }

}
