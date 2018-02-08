import { CommonModule } from "@angular/common";
import { ModuleWithProviders, NgModule } from "@angular/core";

export * from "./service/lightbox.service";
export * from "./component/lightbox.component";
export * from "./model/image.model";

import { Lightbox } from "./component/lightbox.component";
import { LightboxService } from "./service/lightbox.service";

// import 'photoswipe/dist/photoswipe.css';
// import 'photoswipe/dist/default-skin/default-skin.css';

export let providers = [LightboxService];

@NgModule({
  imports: [CommonModule],
  declarations: [Lightbox],
  providers: [LightboxService],
  exports: [Lightbox]
})
export class NgxPhotoswipeModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgxPhotoswipeModule,
      providers
    };
  }
}
