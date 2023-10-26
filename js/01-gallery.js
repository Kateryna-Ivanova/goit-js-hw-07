
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
// Додаємо реакцію на галерею
galleryList.addEventListener('click', onClick)

// ф-я того що відбуватиметься при кліку
function onClick(evt){
// Кажемо щоб прі кліку не було завантаження
   evt.preventDefault();
   // Кажемо, якщо це не картинка,то не реагувати на клік
if(evt.target.nodeName !== 'IMG'){
   return;}

   const instance = basicLightbox.create(`<img src="${evt.target.dataset.source}" width="800" height="600">`);
      instance.show();

galleryList.addEventListener("keydown", (evt)=>{
         if (evt.code === "Escape"){
            instance.close();
         }});
}

