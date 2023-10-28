import { galleryItems } from './gallery-items.js';

// Change code below this line

console.log(galleryItems);
const galleryList = document.querySelector('.gallery');
console.log(galleryList)

// renderGalleryMarkup - ф-я розмітки галереї
function renderGalleryMarkup(images){
   const markup = images
   .map(({preview, original, description }) => {
    return`<li class="gallery__item">
<a class="gallery__link" href="${original}" >
<img class="gallery__image" src="${preview}" alt="${description}"/>
</a>
</li>`
   }).join('');
   galleryList.innerHTML = markup;
}
// Додаємо розмітку галереї на сорінці
renderGalleryMarkup(galleryItems)

let lightbox = new SimpleLightbox('.gallery a', {
captionsData: "alt",
captionDelay: 250
});
lightbox.open();