import { Component, OnInit } from '@angular/core';
import { LightboxService } from "@ngx-photoswipe";
// import { LightboxService } from './../../../lib/src/service/lightbox.service';
import { Image } from "@ngx-photoswipe";
// import { Image } from './../../../lib/src/model/image.model';

@Component({
  selector: 'app-root',
  templateUrl: './gallery.component.html'
})
export class GalleryComponent implements OnInit {
  public galleryKey: string;

  constructor(private ls: LightboxService) { }

  public ngOnInit() {
    this.ls.createGallery('galleryKey');
    const img = new Image();
    img.largeUrl = '/assets/one.jpg';
    img.height = 3296;
    img.width = 4934;
    img.id = 0;
    img.size = `${img.width}x${img.height}`;
    img.thumbUrl = '/assets/one.jpg';
    this.ls.addImage('galleryKey', img);

    const img2 = new Image();
    img2.largeUrl = '/assets/two.jpg';
    img2.height = 3296;
    img2.width = 4934;
    img2.id = 0;
    img2.size = `${img.width}x${img.height}`;
    img2.thumbUrl = '/assets/two.jpg';
    this.ls.addImage('galleryKey', img2);

    setTimeout(() => {
      this.galleryKey = 'galleryKey';
    }, 2000);
  }

  public imagesLoaded(event: any) {
    console.log(event);
  }
}
