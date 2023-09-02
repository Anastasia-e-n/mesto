// переменные для редактирования профиля

export const popupEdit = document.querySelector('.popup_type_profile');
const buttonCloseEdit = popupEdit.querySelector('.popup__close-button');
export const buttonEdit = document.querySelector('.profile__edit-button');
export const nameEdit = document.querySelector('.profile__title');
export const jobEdit = document.querySelector('.profile__subtitle');
export const nameInput = document.querySelector('#name-input');
export const jobInput = document.querySelector('#job-input');

// переменные для вывода изображения

export const popupImage = document.querySelector('.popup_type_image');
const buttonCloseImage = popupImage.querySelector('.popup__close-button');
export const popupImagePic = popupImage.querySelector('.popup__image');
export const popupCaption = popupImage.querySelector('.popup__caption');

// переменные для добавления карточки

const cardsContainer = document.querySelector('.element-grid');
export const popupAdd = document.querySelector('.popup_type_card-add');
export const buttonAdd = document.querySelector('.profile__add-button');
const buttonCloseAdd = popupAdd.querySelector('.popup__close-button');
export const formAdd = document.querySelector('#popup-add-form');
export const titleInput = document.querySelector('#title-input');
export const linkInput = document.querySelector('#link-input');
export const elementItemTemplate = document.querySelector('.element-grid_template').content.querySelector('.element-grid__wrapper');

// переменнные для закрытия окна при клике на overlay

const overlayEdit = document.querySelector('.popup__overlay_edit');
const overlayAdd = document.querySelector('.popup__overlay_add');
const overlayImage = document.querySelector('.popup__overlay_image');