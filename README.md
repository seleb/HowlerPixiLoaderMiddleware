# `howler-pixi-loader-middleware`

[PixiJS](https://github.com/pixijs/pixi.js) loader parser for [Howler](https://github.com/goldfire/howler.js/) audio

Note: This package has been updated from being loader middleware to being a loader parser for Pixi 7.x, which dramatically changed how assets are loaded in Pixi.
If you are using Pixi 6.x or below, you will need to use an older version of this package (e.g. 3.x).

## Installation

```sh
npm i howler-pixi-loader-middleware
```

## Example

```js
import HowlerLoaderParser from 'howler-pixi-loader-middleware';
import { Assets, extensions } from 'pixi.js';

// add extension before loading assets
extensions.add(HowlerLoaderParser);

// load files (or add to bundle)
const myAudio = await Assets.load('my_audio.mp3');

// after load is complete, use Howl objects as needed
myAudio.play();
```
