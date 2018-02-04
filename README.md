# PhotoSwipe for Angular 2+ with Universal support

This is a library with components and services for PhotoSwipe.
The official PhotoSwipe JS file is still needed.

### Installation

```
npm install --save photoswipe
npm install --save angular2_photoswipe
```
Add to index.html
```
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/photoswipe/4.1.2/photoswipe.min.css" />
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/photoswipe/4.1.2/default-skin/default-skin.css" />
<script src="https://cdnjs.cloudflare.com/ajax/libs/photoswipe/4.1.2/photoswipe.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/photoswipe/4.1.2/photoswipe-ui-default.min.js"></script>
```
Include the Angular2PhotoswipeModule.
```js
import {Angular2PhotoswipeModule} from 'angular2_photoswipe';

@NgModule({
  ...
  imports: [
    BrowserModule,
    Angular2PhotoswipeModule.forRoot()
  ]
  ...
})
export class AppModule {
  ...
}
```

### Usage

```js
//create gallery
this.ls.createGallery('galleryKey');

//define images
let img = new Image();
img.largeUrl = '/assets/one.jpg';
img.height = 3296;
img.width = 4934;
img.id = 0;
img.size = `${img.width}x${img.height}`;
img.thumbUrl = '/assets/one.jpg';

//add image to gallery
this.ls.addImage('galleryKey', img);
```

### Demo

For a complete integration example have a look in the demo folder.


### Origin repo:
```
  https://github.com/wollio/angular2_photoswipe
```

