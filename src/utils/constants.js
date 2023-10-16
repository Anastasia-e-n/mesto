// переменные для редактирования профиля

export const popupEdit = document.querySelector('.popup_type_profile');
const buttonCloseEdit = popupEdit.querySelector('.popup__close-button');
export const buttonEdit = document.querySelector('.profile__edit-button');
export const nameEdit = document.querySelector('.profile__title');
export const jobEdit = document.querySelector('.profile__subtitle');
export const nameInput = popupEdit.querySelector('#name-input');
export const jobInput = popupEdit.querySelector('#job-input');

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

export const validationConfig = {
  formSelector: '.form',
  inputSelector: '.form__item',
  submitButtonSelector: '.form__button',
  inactiveButtonClass: 'form__button_inactive',
  inputErrorClass: 'form__item_type_error',
  errorClass: 'form__input-error_active'
};

export const initialCards = [
    {
      name: 'Карачаевск',
      link: 'https://images.unsplash.com/photo-1588584922681-745a2223f72c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80'
    },
    {
      name: 'Гора Эльбрус',
      link: 'https://images.unsplash.com/photo-1620554918149-26ee14d9abc4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
    },
    {
      name: 'Домбай',
      link: 'https://images.unsplash.com/photo-1638627048751-f752d1e260a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
    },
    {
      name: 'Дагестан',
      link: 'https://images.unsplash.com/photo-1634757714057-9de2e336665e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80'
    },
    {
      name: 'Алтай',
      link: 'https://images.unsplash.com/photo-1634876371724-82860814ad94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80'
    },
    {
      name: 'Красная поляна, Сочи',
      link: 'https://images.unsplash.com/photo-1665882407708-61818758f02b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
    }
  ];