import {
	Howl
} from 'howler';
import {
	LoaderResource
} from 'pixi.js';


export default function HowlerMiddleware(resource, next) {
	if (resource && ["wav", "ogg", "mp3", "mpeg"].includes(resource.extension)) {
		resource._setFlag(LoaderResource.STATUS_FLAGS.LOADING, true);
		const options = JSON.parse(JSON.stringify(resource.metadata));
		options.src = [resource.url];
		options.onload = function () {
			resource.complete();
			next();
		};
		options.onloaderror = function (id, message) {
			console.error(resource);
			resource.abort(message);
			next();
		}
		resource.data = new Howl(options);
	} else {
		next();
	}
}
