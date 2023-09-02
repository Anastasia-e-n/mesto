import '../pages/index.css';
import { Card } from '../components/Сard.js';
import { FormValidator } from '../components/FormValidator.js';
import { initialCards } from '../components/initial-cards.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';
import { list, 
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

const cardSection = new Section({
  items: initialCards,
  renderer: function(item) {
    const cardElement = new Card(item, function handleCardClick() {popupWithImage.open(item)}, '.element-grid_template');
    return cardElement.generateCard();
  }
}, 
'.element-grid'
);

cardSection.renderItems();

const userInfo = new UserInfo('.profile__title', '.profile__subtitle')

const popupWithImage = new PopupWithImage('.popup_type_image');
popupWithImage.setEventListeners()

const popupEditForm = new PopupWithForm('.popup_type_profile', 
  function submitHandler() {
      userInfo.setUserInfo({name: nameInput.value , job: jobInput.value})
  }
);

popupEditForm.setEventListeners()

const popupAddForm = new PopupWithForm('.popup_type_card-add', function submitHandler() {
  const cardElement = new Card({name: titleInput.value , link: linkInput.value}, function handleCardClick() {popupWithImage.open(item)}, '.element-grid_template')
  cardSection.addItem({name: titleInput.value , link: linkInput.value});
  formAdd.reset();
});

popupAddForm.setEventListeners()

function handlePopupEditProfile() {
  const userData = userInfo.getUserInfo()
  nameInput.value = userData.name
  jobInput.value = userData.job
  popupEditForm.open()
}

const profileFormValidator = new FormValidator(validationConfig, popupEdit);
profileFormValidator.enableValidation();

const addFormValidator = new FormValidator(validationConfig, formAdd);
addFormValidator.enableValidation();

buttonEdit.addEventListener('click', handlePopupEditProfile); 

buttonAdd.addEventListener('click', () => {
  popupAddForm.open();
  addFormValidator.toggleButtonState();
});