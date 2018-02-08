import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
// import { NgxPhotoswipeModule } from '@ngx-photoswipe';
// tslint:disable-next-line:no-implicit-dependencies
import { NgxPhotoswipeModule } from "@ngx-photoswipe";

import { GalleryComponent } from "./gallery/gallery.component";

@NgModule({
  declarations: [GalleryComponent],
  imports: [BrowserModule, NgxPhotoswipeModule.forRoot()],
  providers: [],
  bootstrap: [GalleryComponent]
})
export class AppModule {
  constructor() {}
}
