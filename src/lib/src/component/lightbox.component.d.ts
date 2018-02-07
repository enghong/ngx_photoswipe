import { ChangeDetectorRef, EventEmitter, OnChanges } from '@angular/core';
import { Image } from '../model/image.model';
import { LightboxService } from '../service/lightbox.service';
export declare class Lightbox implements OnChanges {
  private lbService;
  private ref;
  key: string;
  loadedEmitter: EventEmitter<number>;
  isBrowser: boolean;
  constructor(
    lbService: LightboxService,
    ref: ChangeDetectorRef,
    platformId: string
  );
  ngOnChanges(): void;
  private checkImageLoad();
  openImage(img: Image): boolean;
  getImages(): Image[];
  private openPhotoSwipe(img, galleryDOM);
  private getImagesAsPhotoswipe();
}
