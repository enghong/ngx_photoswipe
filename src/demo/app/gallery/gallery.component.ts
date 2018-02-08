import { Component, OnInit } from "@angular/core";

// import { Image, LightboxService } from "ngx-photoswipe";

// tslint:disable-next-line:no-implicit-dependencies
import { Image, LightboxService } from "@ngx-photoswipe";

@Component({
  selector: "ngx-root",
  templateUrl: "./gallery.component.html"
})
export class GalleryComponent implements OnInit {
  galleryKey: string;

  constructor(private ls: LightboxService) {}

  ngOnInit(): void {
    this.ls.createGallery("galleryKey");
    const img = new Image();
    img.largeUrl = "/assets/one.jpg";
    img.height = 3296;
    img.width = 4934;
    img.id = 0;
    img.size = `${img.width}x${img.height}`;
    img.thumbUrl = "/assets/one.jpg";
    this.ls.addImage("galleryKey", img);

    const img2 = new Image();
    img2.largeUrl = "/assets/two.jpg";
    img2.height = 3296;
    img2.width = 4934;
    img2.id = 0;
    img2.size = `${img.width}x${img.height}`;
    img2.thumbUrl = "/assets/two.jpg";
    this.ls.addImage("galleryKey", img2);

    setTimeout(() => {
      this.galleryKey = "galleryKey";
    }, 2000);
  }

  imagesLoaded(event: any): void {}
}
