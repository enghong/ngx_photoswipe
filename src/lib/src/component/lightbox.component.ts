import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  ViewEncapsulation,
} from "@angular/core";
import { Inject, PLATFORM_ID } from "@angular/core";
import { Image } from "../model/image.model";
import { PhotoswipeImage } from "../model/photoswipe-image.model";
import { LightboxService } from "../service/lightbox.service";

import * as PhotoSwipe from "photoswipe";
import * as PhotoSwipeUI_Default from "photoswipe/dist/photoswipe-ui-default";
const imagesLoaded = require("imagesloaded");
import { isPlatformBrowser } from "@angular/common";

@Component({
  selector: "lightbox",
  templateUrl: 'lightbox.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class Lightbox implements OnChanges {
  @Input("galleryKey") public key: string;
  @Output("imagesLoaded")
  public loadedEmitter: EventEmitter<number> = new EventEmitter();
  public isBrowser: boolean;
  constructor(
    private lbService: LightboxService,
    private ref: ChangeDetectorRef,
    @Inject(PLATFORM_ID) platformId: string,
  ) {
    ref.detach();
    this.isBrowser = this.isBrowser = isPlatformBrowser(platformId);
  }

  public ngOnChanges() {
    this.ref.detectChanges();
    if (this.isBrowser) {
      this.checkImageLoad();
    }
  }

  private checkImageLoad() {
    imagesLoaded(`#${this.key}`, (check: any) => {
      this.loadedEmitter.emit(check.images.length);
    });
  }

  public openImage(img: Image) {
    this.openPhotoSwipe(
      img,
      document.getElementsByClassName("ngx_photoswipe")[0],
    );
    return false;
  }

  public getImages(): Image[] {
    return this.lbService.getImages(this.key);
  }

  private openPhotoSwipe(img: Image, galleryDOM: any): boolean {
    const options: PhotoSwipe.Options = {};
    options.galleryUID = galleryDOM.getAttribute("data-pswp-uid");
    options.index = img.id;
    const PSWP: HTMLElement = document.querySelectorAll(
      ".pswp",
    )[0] as HTMLElement;
    new PhotoSwipe(
      PSWP,
      PhotoSwipeUI_Default,
      this.getImagesAsPhotoswipe(),
      options,
    ).init();
    return false;
  }

  private getImagesAsPhotoswipe(): PhotoswipeImage[] {
    const items: PhotoswipeImage[] = [];
    items.length = 0;

    this.lbService.getImages(this.key).forEach(function (img) {
      items.push(new PhotoswipeImage(img.largeUrl, img.width, img.height));
    });
    return items;
  }
}
