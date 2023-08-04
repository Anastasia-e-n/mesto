import { Card } from './Сard.js';
import { FormValidator } from './FormValidator.js';
import { initialCards } from './initial-cards.js';

// переменные для редактирования профиля

const popupEdit = document.querySelector('.popup_type_profile');
const buttonCloseEdit = popupEdit.querySelector('.popup__close-button');
const buttonEdit = document.querySelector('.profile__edit-button');
const nameEdit = document.querySelector('.profile__title');
const jobEdit = document.querySelector('.profile__subtitle');
const formEdit = document.querySelector('#popup-edit-form');
const nameInput = document.querySelector('#name-input');
const jobInput = document.querySelector('#job-input');

// переменные для вывода изображения

export const popupImage = document.querySelector('.popup_type_image');
const buttonCloseImage = popupImage.querySelector('.popup__close-button');
export const popupImagePic = popupImage.querySelector('.popup__image');
export const popupCaption = popupImage.querySelector('.popup__caption');

// переменные для добавления карточки

const cardsContainer = document.querySelector('.element-grid');
const popupAdd = document.querySelector('.popup_type_card-add');
const buttonAdd = document.querySelector('.profile__add-button');
const buttonCloseAdd = popupAdd.querySelector('.popup__close-button');
const formAdd = document.querySelector('#popup-add-form');
const titleInput = document.querySelector('#title-input');
const linkInput = document.querySelector('#link-input');
const elementItemTemplate = document.querySelector('.element-grid_template').content.querySelector('.element-grid__wrapper');

// переменнные для закрытия окна при клике на overlay

const overlayEdit = document.querySelector('.popup__overlay_edit');
const overlayAdd = document.querySelector('.popup__overlay_add');
const overlayImage = document.querySelector('.popup__overlay_image');

// функции для вывода изображения и генерации карточки

initialCards.forEach((item) => {
  cardsContainer.append(createCard(item));
});

// функция добавления карточки 

function createCard(item) {
  const cardElement = new Card(item, '.element-grid_template');
  return cardElement.generateCard();
}

function addCard (evt) {
  evt.preventDefault();
  cardsContainer.prepend(createCard({name: titleInput.value , link: linkInput.value}));
  closePopup(popupAdd);
}

// функция для закрытия popup esc

function closeEscape(evt) {
  if (evt.key === "Escape") {
    closePopup(document.querySelector('.popup_opened'));
  }
}

// функции для открытия и закрытия popup

export function openPopup(popup) {
  document.addEventListener('keydown', closeEscape);
  popup.classList.add('popup_opened')
};

function closePopup(popup) {
  document.removeEventListener('keydown', closeEscape);
	popup.classList.remove('popup_opened')
};

// функции для редактирования профиля

buttonEdit.addEventListener('click', function (){
	nameInput.value = nameEdit.textContent;
	jobInput.value = jobEdit.textContent;
	openPopup(popupEdit);
}); 

function editFormSubmit (evt) {
	evt.preventDefault(); 
		nameEdit.textContent = nameInput.value;
		jobEdit.textContent = jobInput.value;
  	closePopup(popupEdit);
};

// сброс данных полей

buttonCloseAdd.addEventListener('click', function () {
  closePopup(popupAdd);
}); 

// деактивация кнопки

buttonAdd.addEventListener('click', () => {
  openPopup(popupAdd);
  formAdd.reset();
  addFormValidator.toggleButtonState();
});

formEdit.addEventListener('submit', editFormSubmit);
formAdd.addEventListener('submit', addCard);

buttonCloseEdit.addEventListener('click', () => closePopup(popupEdit));
buttonAdd.addEventListener('click', () => openPopup(popupAdd));
buttonCloseAdd.addEventListener('click', () => closePopup(popupAdd));
buttonCloseImage.addEventListener('click', () => closePopup(popupImage));
overlayEdit.addEventListener('mousedown', () => closePopup(popupEdit));
overlayAdd.addEventListener('mousedown', () => closePopup(popupAdd));
overlayImage.addEventListener('mousedown', () => closePopup(popupImage));

const validationConfig = {
  formSelector: '.form',
  inputSelector: '.form__item',
  submitButtonSelector: '.form__button',
  inactiveButtonClass: 'form__button_inactive',
  inputErrorClass: 'form__item_type_error',
  errorClass: 'form__input-error_active'
};


const profileFormValidator = new FormValidator(validationConfig, popupEdit);
profileFormValidator.enableValidation();

const addFormValidator = new FormValidator(validationConfig, popupAdd);
addFormValidator.enableValidation();