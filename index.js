import { Howl } from 'howler';
import {
	ExtensionType,
	LoaderParserPriority,
	path,
} from 'pixi.js';

export default {
	extension: {
		name: 'Howler Loader Parser',
		priority: LoaderParserPriority.Normal,
		type: ExtensionType.LoadParser,
	},
	test(url) {
		return (
			path.extname(url).includes('.mp3') ||
			path.extname(url).includes('.wav') ||
			path.extname(url).includes('.ogg') ||
			path.extname(url).includes('.mpeg')
		);
	},
	async load(url) {
		return new Promise((resolve, reject) => {
			const howl = new Howl({
				src: [url],
				onload: () => resolve(howl),
				onloaderror: (id, message) => reject(message),
			});
		});
	},
	unload(asset) {
		asset.unload();
	},
}
