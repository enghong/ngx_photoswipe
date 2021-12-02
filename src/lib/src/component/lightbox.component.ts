import { ChangeDetectorRef, Component, EventEmitter, Inject, Input, OnChanges, Output, PLATFORM_ID, ViewEncapsulation } from "@angular/core";
import { Image } from "../model/image.model";
import { PhotoswipeImage } from "../model/photoswipe-image.model";
import { LightboxService } from "../service/lightbox.service";

import PhotoSwipe from "photoswipe";
import PhotoSwipeUI_Default from "photoswipe/dist/photoswipe-ui-default";

import imagesloaded from "imagesloaded";
import { isPlatformBrowser } from "@angular/common";

@Component({
  selector: "ngx-lightbox",
  templateUrl: "lightbox.component.html",
  // tslint:disable-next-line:use-view-encapsulation
  encapsulation: ViewEncapsulation.None
})
export class LightboxComponent implements OnChanges {
  @Input("galleryKey") galleryKey: string;
  @Output("imagesLoaded") imagesLoaded: EventEmitter<number> = new EventEmitter();
  isBrowser: boolean;
  key: any;
  image: any;
  constructor(private lbService: LightboxService, private ref: ChangeDetectorRef, @Inject(PLATFORM_ID) platformId: string) {
    ref.detach();
    this.isBrowser = this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnChanges(): void {
    this.ref.detectChanges();
    if (this.isBrowser) {
      this.checkImageLoad();
    }
  }
  openImage(img: Image): boolean {
    this.openPhotoSwipe(img, document.getElementsByClassName("ngx_photoswipe")[0]);

    return false;
  }

  getImages(): Array<Image> {
    return this.lbService.getImages(this.galleryKey);
  }

  private checkImageLoad(): void {
    imagesloaded(`#${this.galleryKey}`, (check: any) => {
      this.imagesLoaded.emit(check.images.length);
    });
  }

  private openPhotoSwipe(img: Image, galleryDOM: any): boolean {
    const options: PhotoSwipe.Options = {};
    options.galleryUID = galleryDOM.getAttribute("data-pswp-uid");
    options.index = img.id;
    const PSWP: HTMLElement = document.querySelectorAll(".pswp")[0] as HTMLElement;
    new PhotoSwipe(PSWP, PhotoSwipeUI_Default, this.getImagesAsPhotoswipe(), options).init();

    return false;
  }

  private getImagesAsPhotoswipe(): Array<PhotoswipeImage> {
    const items: Array<PhotoswipeImage> = [];
    items.length = 0;

    this.lbService.getImages(this.galleryKey).forEach(function f(img): void {
      items.push(new PhotoswipeImage(img.largeUrl, img.width, img.height));
    });

    return items;
  }
}
