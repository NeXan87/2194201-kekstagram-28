import { PHOTO_COUNT } from './data.js';
import { createPhoto } from './create-photo.js';

export const getPhotos = () => Array.from({ length: PHOTO_COUNT }, createPhoto);
