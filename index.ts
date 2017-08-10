import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as PhotoSwipe from 'photoswipe';

export * from './src/service/lightbox.service';
export * from './src/component/lightbox.component';
export * from './src/model/image.model';

import { Lightbox } from './src/component/lightbox.component';
import { LightboxService } from './src/service/lightbox.service';

export default {
  providers : [LightboxService],
  directives: [Lightbox]
};

@NgModule({
  imports: [ CommonModule ],
  declarations: [ Lightbox ],
  providers: [ LightboxService ],
  exports: [ Lightbox ]
})
export class Angular2Photoswipe {
  static forRoot(): ModuleWithProviders {
        return {
            ngModule: Angular2Photoswipe,
            providers: [LightboxService]
        };
    }
}
