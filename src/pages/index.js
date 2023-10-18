import '../pages/index.css';
import { Card } from '../components/Сard.js';
import { FormValidator } from '../components/FormValidator.js';
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
  initialCards,
  validationConfig
} from '../utils/constants.js';
import Section from '../components/Section.js';

const userInfo = new UserInfo({
  nameSelector: '.profile__title',
  jobSelector: '.profile__subtitle'
});

const  popupEditProfile = new PopupWithForm('.popup_type_profile', 
  function submitHandler(userData) {
      userInfo.setUserInfo(userData.name, userData.job);
  }
);

function handlePopupEditProfile() {
  const userData = userInfo.getUserInfo();
  nameInput.value = userData.name;
  jobInput.value = userData.job;
  popupEditProfile.open();
}

const popupWithImage = new PopupWithImage('.popup_type_image');
popupWithImage.setEventListeners();
const popupImageOpen = (name, link) => {
  popupWithImage.open(name, link);
};

const createCard = item => {
  const card = new Card(item, '.element-grid_template', popupImageOpen);
  return card.getView();
};

const cardSection = new Section(
  {
    items: initialCards,
    renderer: item => {
      cardSection.addItem(createCard(item));
    }

  },
  '.element-grid'
);
cardSection.renderItems();

const  popupAddCard = new PopupWithForm('.popup_type_card-add', function submitHandler(formData) {
  const data = { name: formData[titleInput.name], link: formData[linkInput.name] };
  cardSection.addItem(createCard(data));
  formAdd.reset();
});

const profileFormValidator = new FormValidator(validationConfig, popupEdit);
profileFormValidator.enableValidation();

const addFormValidator = new FormValidator(validationConfig, formAdd);
addFormValidator.enableValidation();

buttonEdit.addEventListener('click', handlePopupEditProfile); 

buttonAdd.addEventListener('click', () => {
  popupAddCard.open();
  addFormValidator.toggleButtonState();
});

popupEditProfile.setEventListeners()

popupAddCard.setEventListeners()
