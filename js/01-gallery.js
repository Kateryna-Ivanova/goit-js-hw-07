// import { galleryItems } from './gallery-items.js';
// // Change code below this line
// const galleryList = document.querySelector('.gallery');
// console.log(galleryList)

// function renderGalleryMarkup(images){
//    const markup = images.map(({preview, original, description }) => {
//     return`<li class="gallery__item">
// <a class="gallery__link" href="${original}">
// <img class="gallery__image" src="${preview} alt="${description}""
// </a>
// </li>`
//    }).join('');
//    galleryList.innerHTML = markup;
// }
// renderGalleryMarkup(galleryItems)
// // console.log(galleryItems);







import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryList = document.querySelector('.gallery');
console.log(galleryList)

function renderGalleryMarkup(images){
   const markup = images
   .map(({preview, original, description }) => {
    return`<li class="gallery__item">
<a class="gallery__link" href="${original}">
<img class="gallery__image" src="${preview}" alt="${description}"/>
</a>
</li>`
   }).join('');
   galleryList.innerHTML = markup;
}
renderGalleryMarkup(galleryItems)








galleryList.addEventListener('click', onClick)

function onClick(evt){
if(evt.target.nodeName === 'IMG'){
   return;
}
console.log("Це картинка")
}





// console.log(galleryItems);
