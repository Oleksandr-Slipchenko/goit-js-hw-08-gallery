import galleryItems from './gallery-items.js';

const galleryRef = document.querySelector('.js-gallery');

const openModalRef = document.querySelector('.lightbox');

const listItemsMarkup = createListPreviewGalleryMarkup(galleryItems);

function createListPreviewGalleryMarkup(items) {
  return items.map(item => `<li><img src="${item.preview}" alt="${item.description}" width="340"/></li>`).join('');
}

// function createListOriginalGalleryMarkup(items) {
//   return items.map(item => `<li><img src="${item.original}" width="1280"/></li>`).join('');
// }

galleryRef.innerHTML = listItemsMarkup;

galleryRef.addEventListener('click', onClick);

function onClick(e) {
  if (e.target.nodeName !== 'IMG') {
    return;
  }
  openModalRef.classList.add('is-open');
  galleryRef.li.width = 1280;

}