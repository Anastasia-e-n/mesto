export class Card {
  constructor(data, templateSelector, handleCardClick) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    const cardTemplate = document
      .querySelector(this._templateSelector)
      .content.querySelector('.element-grid__wrapper')
      .cloneNode(true);
    return cardTemplate;
  }

  _getElements() {
    this._image = this._newCard.querySelector('.element-grid__image-place');
    this._text = this._newCard.querySelector('.element-grid__title');
    this._likeButton = this._newCard.querySelector('.element-grid__image-like');
    this._deleteButton = this._newCard.querySelector('.element-grid__remove');
  }

  _setData() {
    this._text.textContent = this._name;
    this._image.src = this._link;
    this._image.alt = this._name;
  }

  _handleDeleteButton() {
    this._newCard.remove();
    this._newCard = null;
  }

  _handleLikeButton() {
    this._likeButton.classList.toggle('element__button_active');
  }

  _popupImageOpen() {
    this._handleCardClick(this._name, this._link);
  }

  _setListeners() {
    this._deleteButton.addEventListener('click', this._handleDeleteButton.bind(this));
    this._likeButton.addEventListener('click', this._handleLikeButton.bind(this));
    this._image.addEventListener('click', () => {
      this._popupImageOpen();
    });
  }

  getView() {
    this._newCard = this._getTemplate();
    this._getElements();
    // this._image = this._newCard.querySelector('#element-image');
    this._setData();
    this._setListeners();
    return this._newCard;
  }
}
