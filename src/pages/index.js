import '../pages/index.css';
import { Card } from '../components/Сard.js';
import { FormValidator } from '../components/FormValidator.js';
import { initialCards } from '../components/initial-cards.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';
import { 
  popupEdit,
  buttonEdit,
  nameInput,
  jobInput,
  buttonAdd,
  formAdd,
  titleInput,
  linkInput,

} from '../components/constants.js';
import Section from '../components/Section.js';

const validationConfig = {
  formSelector: '.form',
  inputSelector: '.form__item',
  submitButtonSelector: '.form__button',
  inactiveButtonClass: 'form__button_inactive',
  inputErrorClass: 'form__item_type_error',
  errorClass: 'form__input-error_active'
};

const userInfo = new UserInfo({
  nameSelector: '.profile__title',
  jobSelector: '.profile__subtitle'
});

const popupEditForm = new PopupWithForm('.popup_type_profile', 
  function submitHandler(userData) {
      userInfo.setUserInfo(userData.name, userData.job);
  }
);

function handlePopupEditProfile() {
  const userData = userInfo.getUserInfo();
  nameInput.value = userData.name;
  jobInput.value = userData.job;
  popupEditForm.open();
}

const profileFormValidator = new FormValidator(validationConfig, popupEdit);
profileFormValidator.enableValidation();

buttonEdit.addEventListener('click', handlePopupEditProfile); 
popupEditForm.setEventListeners()



const popupWithImage = () => {
  const popupImage = new PopupWithImage('.popup_type_image');
  popupImage.setEventListeners();
  return popupImage.open();
};

const cardSection = new Section(
  {
    items: initialCards,
    renderer: item => {
      cardSection.addItem(new Card(item, '.element-grid_template', popupWithImage).getView());
    }
  },
  '.element-grid'
);
cardSection.renderItems();

const popupAddForm = new PopupWithForm('.popup_type_card-add', function submitHandler() {
  const data = { name: titleInput.value, link: linkInput.value };
    const card = new Card(data, '.element-grid_template', '.popup_type_image').getView();
    cardSection.addItem(card);
  formAdd.reset();
});

popupAddForm.setEventListeners()

const addFormValidator = new FormValidator(validationConfig, formAdd);
addFormValidator.enableValidation();

buttonAdd.addEventListener('click', () => {
  popupAddForm.open();
  addFormValidator.toggleButtonState();
});