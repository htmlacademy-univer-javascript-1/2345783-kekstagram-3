import { generatePhotos } from "./data.js";
import { insertPhotoMiniature } from "./photoMiniature.js";

const photos = generatePhotos(25);
console.log(photos);
insertPhotoMiniature(photos);
