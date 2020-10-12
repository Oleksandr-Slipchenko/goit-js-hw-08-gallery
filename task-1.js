import galleryItems from './gallery-items.js';

//               Variables

const galleryRef = document.querySelector('.js-gallery');

const modalWindowRef = document.querySelector('.lightbox__overlay');

const openModalRef = document.querySelector('.js-lightbox');

const closeBtnModalRef = document.querySelector('[data-action="close-lightbox"]');

const imgModalRef = document.querySelector('.lightbox__image');

//               Functions


function createListPreviewGalleryMarkup(items) {
  return items.map(item => `<li class="gallery__item"><a class="gallery__link" href="${item.original}"><img class="gallery__image" src="${item.preview}" data-source="${item.original}" alt="${item.description}"/></a></li>`).join('');
}

const listItemsMarkup = createListPreviewGalleryMarkup(galleryItems);

galleryRef.insertAdjacentHTML("afterbegin", listItemsMarkup);

function onOpenModalClick(e) {
  e.preventDefault();
  window.addEventListener('keydown', onKeyEscCloseModal);
  window.addEventListener('keydown', keyboardPress);

  if (e.target.nodeName !== 'IMG') {
    return;
  }
  openModalRef.classList.add('is-open');

  imgModalRef.src = e.target.dataset.source;
  imgModalRef.alt = e.target.alt;
}

function onCloseModalClick(e) {
  window.removeEventListener('keydown', onKeyEscCloseModal);

  openModalRef.classList.remove('is-open');
  imgModalRef.src = '';
  imgModalRef.alt = '';

}

function onBackdropClose(e) {
  if (e.currentTarget === e.target) {
    onCloseModalClick();
  }
}

function onKeyEscCloseModal(e) {
  if (e.code === 'Escape') {
    onCloseModalClick();
  }
}


const UrlsArr = galleryItems.map((el) => el.original);
function keyboardPress(event) {
  if (event.code === "ArrowRight") {
    for (let i = 0; i < UrlsArr.length; i += 1) {
      if (imgModalRef.src === UrlsArr[8]) {
        imgModalRef.src = `${UrlsArr[0]}`;
        return;
      } else if (imgModalRef.src === UrlsArr[i]) {
        imgModalRef.src = `${UrlsArr[i + 1]}`;
        return;
      }
    }
  } else if (event.code === "ArrowLeft") {
    for (let i = 0; i < UrlsArr.length; i += 1) {
      if (imgModalRef.src === UrlsArr[0]) {
        imgModalRef.src = `${UrlsArr[8]}`;
        return;
      } else if (imgModalRef.src === UrlsArr[i]) {
        imgModalRef.src = `${UrlsArr[i - 1]}`;
        return;
      }
    }
  }
}

//               EventListeners

galleryRef.addEventListener('click', onOpenModalClick);

closeBtnModalRef.addEventListener('click', onCloseModalClick);

modalWindowRef.addEventListener('click', onBackdropClose);
