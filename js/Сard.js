import { popupImage } from './index.js';
import { popupImagePic } from './index.js';
import { popupCaption } from './index.js';
import { openPopup } from './index.js';

export class Card {
    constructor(cardData, templateSelector) {
      this._cardData = cardData;
      this._templateSelector = templateSelector;
    }
  
    generateCard() {
      const _elementItem = document.querySelector(this._templateSelector).content.querySelector('.element-grid__wrapper').cloneNode(true);
      const image = _elementItem.querySelector('.element-grid__image-place')
      const title = _elementItem.querySelector('.element-grid__title');
      this.likeButton = _elementItem.querySelector('.element-grid__image-like');
      this.removeButton = _elementItem.querySelector('.element-grid__remove');
      this.imageButton = _elementItem.querySelector('.element-grid__image-place');
      image.src = this._cardData.link;
      image.alt = this._cardData.name;
      title.textContent = this._cardData.name;
      this._makeEventListeners();
      return _elementItem;
    }
  
    _like() {
      this.likeButton.classList.toggle("element-grid__image-like_active");
    }
  
    _removeCard() {
      this.removeButton.parentElement.remove()
    }
  
    _preview() {
      popupImagePic.src = this._cardData.link;
      popupCaption.textContent = this._cardData.name;
      popupImagePic.alt = this._cardData.name;
      openPopup(popupImage);
    }

    _makeEventListeners() {
      this.likeButton.addEventListener('click', () => this._like());
      this.removeButton.addEventListener('click', () => this._removeCard());
      this.imageButton.addEventListener('click', () => this._preview());
    }
}