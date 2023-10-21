// переменные для редактирования профиля

export const popupEdit = document.querySelector('.popup_type_profile');
const buttonCloseEdit = popupEdit.querySelector('.popup__close-button');
export const buttonEdit = document.querySelector('.profile__edit-button');
export const nameEdit = document.querySelector('.profile__title');
export const jobEdit = document.querySelector('.profile__subtitle');
export const nameInput = popupEdit.querySelector('#name-input');
export const jobInput = popupEdit.querySelector('#job-input');
export const buttonEditAvatar = document.querySelector('.profile__edit-avatar-button');
export const popupEditAvatar = document.querySelector('.popup_type_avatar');

// переменные для вывода изображения

export const popupImage = document.querySelector('.popup_type_image');
const buttonCloseImage = popupImage.querySelector('.popup__close-button');
export const popupImagePic = popupImage.querySelector('.popup__image');
export const popupCaption = popupImage.querySelector('.popup__caption');

// переменные для добавления карточки

export const popupAdd = document.querySelector('.popup_type_card-add');
export const buttonAdd = document.querySelector('.profile__add-button');
const buttonCloseAdd = popupAdd.querySelector('.popup__close-button');
export const formAdd = document.querySelector('#popup-add-form');
export const titleInput = document.querySelector('#title-input');
export const linkInput = document.querySelector('#link-input');

export const cardsContainer = '.element-grid';
export const elementItemTemplate = '.element-grid_template';


// переменнные для закрытия окна при клике на overlay

const overlayEdit = document.querySelector('.popup__overlay_edit');
const overlayAdd = document.querySelector('.popup__overlay_add');
const overlayImage = document.querySelector('.popup__overlay_image');

export const validationConfig = {
  formSelector: '.form',
  inputSelector: '.form__item',
  submitButtonSelector: '.form__button',
  inactiveButtonClass: 'form__button_inactive',
  inputErrorClass: 'form__item_type_error',
  errorClass: 'form__input-error_active'
};

export const apiData = {
  url: 'https://mesto.nomoreparties.co/v1/cohort-77',
  headers: {
      authorization: 'c7c00abe-9fa5-4a4b-95d3-c690acc3aa2e',
      'Content-Type': 'application/json'
  }
};