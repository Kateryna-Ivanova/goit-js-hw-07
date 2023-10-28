import { galleryItems } from './gallery-items.js';
const galleryList = document.querySelector('.gallery');
console.log(galleryList)

// renderGalleryMarkup - ф-я розмітки галереї
function renderGalleryMarkup(images){
   const markup = images
   .map(({preview, original, description }) => {
    return`<li class="gallery__item">
<a class="gallery__link" href="${original}">
<img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/>
</a>
</li>`
   }).join('');
   galleryList.innerHTML = markup;
}

// Додаємо розмітку галереї на сорінці
renderGalleryMarkup(galleryItems)
// // Додаємо реакцію на галерею
galleryList.addEventListener('click', openModal);

// Функція того, що відбуватиметься при кліку
function openModal(evt) {
  // Кажемо, щоб при кліку не було завантаження
  evt.preventDefault();
  // Кажемо, якщо це не картинка, то не реагувати на клік
  if (evt.target.nodeName !== 'IMG') {
    return;
  }

  const instance = basicLightbox.create(`<img src="${evt.target.dataset.source}" width="800" height="600">`);

  // Встановлюємо слухача клавіатури при відкритті модального вікна
   instance.show();
   // закриття модального вікна
   document.addEventListener("keydown", (evt) => {
      if (evt.code === "Escape") {
         instance.close();
      }
   })
   document.removeEventListener("keydown", evt)
}






