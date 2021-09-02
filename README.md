<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [videojs-ogvjs](#videojs-ogvjs)
  - [Usage](#usage)
    - [`<script>` Tag](#script-tag)
    - [RequireJS/AMD](#requirejsamd)
  - [License](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# videojs-ogvjs

[Ogv.js](https://github.com/brion/ogv.js/) Tech plugin for [Video.JS](https://www.videojs.com).

With this Tech plugin, Video.JS can play OGG/WEBM file on the browsers that do not support it (Safari).

Many thanks to [Brion Vibber](https://github.com/brion/) for the great work.
## Usage

To include videojs-ogvjs on your website or web application, use any of the following methods.

### `<script>` Tag

This is the simplest case. Get the script in whatever way you prefer and include the plugin _after_ you include [video.js][videojs], so that the `videojs` global is available.

```html
<script src="//path/to/video.min.js"></script>
<script src="/path/to/ogv-support.js"></script>
<script src="/path/to/dist/ogv.js"></script>
<script src="//path/to/videojs-ogvjs.min.js"></script>
<script>
  var player = videojs('my-video', {
    techOrder: ['OgvJS'],
    ogvjs: {
      base: '/node_modules/ogv/dist'
    }
  });
</script>
```

### RequireJS/AMD

When using with RequireJS (or another AMD library), get the script in whatever way you prefer and `require` the plugin as you normally would:

```js
require(['video.js', 'videojs-ogvjs'], function(videojs) {
  var player = videojs('my-video', {
    techOrder: ['OgvJS'],
    ogvjs: {
      base: '/node_modules/ogv/dist'
    }
  });
});
```

## License

MIT. Copyright (c) Huong Nguyen &lt;huongnv13@gmail.com&gt;


[videojs]: http://videojs.com/
