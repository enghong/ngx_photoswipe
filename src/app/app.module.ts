import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser';

//for you
//import {NgxPhotoswipeModule} from 'ngx-photoswipe';
import { NgxPhotoswipeModule } from '../../lib/src/index';
import { GalleryComponent } from './gallery/gallery.component';


@NgModule({
  declarations: [
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    NgxPhotoswipeModule.forRoot()
  ],
  providers: [

  ],
  bootstrap: [GalleryComponent]
})
export class AppModule {

  constructor() {

  }

}
