# `howler-pixi-loader-middleware`

[PixiJS](https://github.com/pixijs/pixi.js) loader middleware for [Howler](https://github.com/goldfire/howler.js/) audio

## Installation

```sh
npm i howler-pixi-loader-middleware
```

## Example

```js
import HowlerMiddleware from 'howler-pixi-loader-middleware';
import { Loader } from 'pixi.js';

// add middleware to loader
Loader.shared.pre(HowlerMiddleware);

// add files to loader, optionally passing Howler options as third parameter
Loader.shared.add('my_audio', 'my_audio.mp3', {
  loop: true,
  volume: 0,
});

// load
Loader.shared.load();
    
// after load is complete, Howl objects will be available in resources
const my_audio = Loader.shared.resources.my_audio.data;
my_audio.play();
```
