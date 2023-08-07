import { popupImage, popupImagePic, popupCaption, openPopup } from './index.js';

export class Card {
  constructor(cardData, templateSelector) {
    this._cardData = cardData;
    this._templateSelector = templateSelector;
  }

  _getTemplate() {
    const _elementCard = document.querySelector(this._templateSelector).content.querySelector('.element-grid__wrapper').cloneNode(true);
    return _elementCard;
  }
  
  generateCard() {
    this._elementItem = this._getTemplate();
    const image = this._elementItem.querySelector('.element-grid__image-place')
    const title = this._elementItem.querySelector('.element-grid__title');
    this._likeButton = this._elementItem.querySelector('.element-grid__image-like');
    this._removeButton = this._elementItem.querySelector('.element-grid__remove');
    this._imageButton = this._elementItem.querySelector('.element-grid__image-place');
    image.src = this._cardData.link;
    image.alt = this._cardData.name;
    title.textContent = this._cardData.name;
    this._makeEventListeners();
    return this._elementItem;
  }
  
  _like() {
    this._likeButton.classList.toggle("element-grid__image-like_active");
  }
  
  _removeCard() {
    this._removeButton.parentElement.remove()
  }
  
  _preview() {
    popupImagePic.src = this._cardData.link;
    popupCaption.textContent = this._cardData.name;
    popupImagePic.alt = this._cardData.name;
    openPopup(popupImage);
  }

  _makeEventListeners() {
    this._likeButton.addEventListener('click', () => this._like());
    this._removeButton.addEventListener('click', () => this._removeCard());
    this._imageButton.addEventListener('click', () => this._preview());
  }
}