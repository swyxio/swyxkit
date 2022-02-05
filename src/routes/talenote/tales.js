import path from 'path';
import { createAPI } from 'talenote';

// __dirname is not a thing with ESM, emulates it with import.meta.url
const taleDir = path.join(import.meta.url, '..').replace('file:', '');
const pathToJson = path.join(taleDir, '_tales.json');
const { post, get, del } = createAPI({ pathToJson });

export { post, get, del };