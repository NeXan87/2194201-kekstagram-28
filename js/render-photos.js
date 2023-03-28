import { onPhotoClick } from './show-big-photo.js';

const imageElement = document.querySelector('.pictures');
const photoTemplate = document.querySelector('#picture').content.querySelector('.picture');

const createPhoto = (photo) => {
  const photoClone = photoTemplate.cloneNode(true);
  photoClone.querySelector('.picture__img').src = photo.url;
  photoClone.querySelector('.picture__img').alt = photo.description;
  photoClone.querySelector('.picture__likes').textContent = photo.likes;
  photoClone.querySelector('.picture__comments').textContent = photo.comments.length;

  photoClone.addEventListener('click', (evt) => {
    evt.preventDefault();
    onPhotoClick(photo);
  });

  return photoClone;
};

export const renderPhotos = (photos) => {
  photos.forEach((photo) => imageElement.append(createPhoto(photo)));
};

