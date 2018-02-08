import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  ViewEncapsulation
} from "@angular/core";
import { Inject, PLATFORM_ID } from "@angular/core";
import { Image } from "../model/image.model";
import { PhotoswipeImage } from "../model/photoswipe-image.model";
import { LightboxService } from "../service/lightbox.service";

import * as PhotoSwipe from "photoswipe";
import * as PhotoSwipeUI_Default from "photoswipe/dist/photoswipe-ui-default";

import * as imagesLoaded from "imagesloaded";

import { isPlatformBrowser } from "@angular/common";

@Component({
  selector: "lightbox",
  templateUrl: "lightbox.component.html",
  encapsulation: ViewEncapsulation.None
})
export class Lightbox implements OnChanges {
  @Input("galleryKey") galleryKey: string;
  @Output("imagesLoaded")
  loadedEmitter: EventEmitter<number> = new EventEmitter();
  isBrowser: boolean;
  constructor(
    private lbService: LightboxService,
    private ref: ChangeDetectorRef,
    @Inject(PLATFORM_ID) platformId: string
  ) {
    ref.detach();
    this.isBrowser = this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnChanges(): void {
    this.ref.detectChanges();
    if (this.isBrowser) {
      this.checkImageLoad();
    }
  }

  private checkImageLoad(): void {
    imagesLoaded(`#${this.galleryKey}`, (check: any) => {
      this.loadedEmitter.emit(check.images.length);
    });
  }

  openImage(img: Image): boolean {
    this.openPhotoSwipe(
      img,
      document.getElementsByClassName("ngx_photoswipe")[0]
    );
    return false;
  }

  getImages(): Array<Image> {
    return this.lbService.getImages(this.galleryKey);
  }

  private openPhotoSwipe(img: Image, galleryDOM: any): boolean {
    const options: PhotoSwipe.Options = {};
    options.galleryUID = galleryDOM.getAttribute("data-pswp-uid");
    options.index = img.id;
    const PSWP: HTMLElement = document.querySelectorAll(
      ".pswp"
    )[0] as HTMLElement;
    new PhotoSwipe(
      PSWP,
      PhotoSwipeUI_Default,
      this.getImagesAsPhotoswipe(),
      options
    ).init();

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
