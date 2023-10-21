export class Card {
    constructor({data, userId, handleCardClick, handleDeleteClick, handleLikeCard}, cardTemplateSelector) {
        this._title = data.name;
        this._link = data.link;
        this._likes = data.likes;
        this._id = data._id;
        this._ownerId = data.owner._id;
        this._userId = userId;
        this._handleCardClick = handleCardClick;
        this._handleDeleteClick = handleDeleteClick;
        this._handleLikeCard = handleLikeCard;
        this._cardTemplateSelector = cardTemplateSelector;
    }

    _getTemplate() {
        return document
            .querySelector(this._cardTemplateSelector)
            .content
            .querySelector('.element-grid__wrapper')
            .cloneNode(true);
    }

    createCard() {
        this._cardElement = this._getTemplate();
        this._cardImage = this._cardElement.querySelector('.element-grid__image-place');
        this._buttonLike = this._cardElement.querySelector('.element-grid__like');
        this._likesCount = this._cardElement.querySelector('.element-grid__like-counter');
        this._buttonDelete = this._cardElement.querySelector('.element-grid__remove');
        this._cardImage.title = this._cardElement.querySelector('.element-grid__title').textContent = this._title;
        this._cardImage.src = this._cardImage.src = this._link;
        this._cardImage.alt = this._cardImage.alt = this._title;
        this._setEventListeners();
        this._hideDeleteButton();
        this.setLike(this._likes);
        this._checkOwnLike();
        return this._cardElement;
    }

    deleteCard = () => {
        this._cardElement.remove();
        this._cardElement = null;
    }

    _hideDeleteButton() {
        if (this._ownerId !== this._userId) {
            this._buttonDelete.remove();
        }
    }

    _setEventListeners() {
        this._buttonDelete.addEventListener('click', () => {
            this._handleDeleteClick();
        });
        this._buttonLike.addEventListener('click', () => {
            this._handleLikeCard();
        });
        this._cardImage.addEventListener('click', () => {
            this._handleCardClick(this._title, this._link);
        });
    }

    isLiked() {
        return this._likes.find(user => user._id === this._userId);
    }

    _checkOwnLike() {
        this.isLiked() ? this.addLike() : this.deleteLike();
    }

    setLike(data) {
        this._likes = data;
        this._likesCount.textContent = this._likes.length;
    }

    addLike = () => {
        this._buttonLike.classList.add('element-grid__like_active');
    }

    deleteLike = () => {
        this._buttonLike.classList.remove('element-grid__like_active');
    }
}