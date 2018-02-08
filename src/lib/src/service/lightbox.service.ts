import { Injectable } from "@angular/core";
import { Image } from "../model/image.model";

@Injectable()
export class LightboxService {
  gallery: { [key: string]: Array<Image> } = {};

  constructor() {}

  createGallery(key: string) {
    this.gallery[key] = [];
  }

  setImages(key: string, images: Array<Image>) {
    this.gallery[key] = images;
  }

  addImage(key: string, image: Image) {
    if (key in this.gallery) {
      this.gallery[key].push(image);
    } else {
      throw new Error(`gallery '${key}' does not exist`);
    }
  }

  getImages(key: string): Array<Image> {
    return this.gallery[key];
  }

  removeImage(key: string, id: number): void {
    this.gallery[key].forEach((img, index) => {
      if (img.id === id) {
        this.gallery[key].splice(index, 1);
      }
    });
  }
}
