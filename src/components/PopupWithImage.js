import Popup from './Popup.js';

export class PopupWithImage extends Popup {
    constructor(popupSelector) {
      super(popupSelector);
      this._popupImage = this._popup.querySelector('.popup__image');
      this._popupCaption = this._popup.querySelector('.popup__caption');
      this._image = document.querySelector('.element-grid__image-place');
      this._text = document.querySelector('.element-grid__title');
    }
  
    open() {
      super.open();
      this._popupImage.src = this._image.src;
      this._popupImage.alt = this._image.alt;
      this._popupCaption.textContent = this._text.textContent;
    }
}

export default PopupWithImage

