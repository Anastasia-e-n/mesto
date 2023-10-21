import '../pages/index.css';
import { Card } from '../components/Сard.js';
import { FormValidator } from '../components/FormValidator.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { UserInfo } from '../components/UserInfo.js';
import { PopupWithSubmit } from "../components/PopupWithSubmit.js";
import { Api } from "../components/Api";
import { 
  popupEdit,
  buttonEdit,
  nameInput,
  jobInput,
  buttonAdd,
  formAdd,
  validationConfig,
  apiData,
  buttonEditAvatar,
  popupEditAvatar,
  elementItemTemplate,
  cardsContainer,
} from '../utils/constants.js';
import Section from '../components/Section.js';

const api = new Api(apiData);

let userId = null;

Promise.all([api.getUserInfo(), api.getInitialCards()])
    .then(([userData, initialCards]) => {
        userId = userData._id;
        profile.setUserInfo(userData);
        profile.setUserAvatar(userData);
        initialCards.reverse();
        cards.renderItems(initialCards);
        }
    )
    .catch((err) => {
        console.log(err);
    })

const cards = new Section({
    items: [],
    renderer: (items) => {
        const card = createNewCard(items);
        cards.addItem(card);
    }
}, cardsContainer);

const profile = new UserInfo({
    nameSelector: '.profile__title',
    jobSelector: '.profile__subtitle',
    avatarSelector: '.profile__image'
});

const popupEditProfile = new PopupWithForm('.popup_type_profile', {
    submitHandler: (data) => {
        popupEditProfile.renderLoading(true);
        api.updateUserInfo(data)
            .then((res) => {
                profile.setUserInfo(res);
                popupEditProfile.close();
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                popupEditProfile.renderLoading(false);
            })
    }
});

function editProfile() {
    const userData = profile.getUserInfo();
    nameInput.value = userData.userName;
    jobInput.value = userData.userInfo;
}

buttonEdit.addEventListener('click', function () {
  editProfile();
  popupEditProfile.open();
  profileFormValidator.toggleButtonState();
});

const popupEditNewAvatar = new PopupWithForm('.popup_type_avatar', {
    submitHandler: (data) => {
        popupEditNewAvatar.renderLoading(true);
        api.updateAvatar(data)
            .then((res) => {
                profile.setUserAvatar(res);
                popupEditNewAvatar.close();
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                popupEditNewAvatar.renderLoading(false);
            })
    }
});

buttonEditAvatar.addEventListener('click', () => {
    popupEditNewAvatar.open();
    avatarValidator.toggleButtonState();
});

const popupAddCard = new PopupWithForm('.popup_type_card-add', {
    submitHandler: (data) => {
        popupAddCard.renderLoading(true);
        api.sendCard(data)
            .then((data) => {
                const card = createNewCard(data);
                cards.addItem(card);
                popupAddCard.close();
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                popupAddCard.renderLoading(false);
            })
    }
});

buttonAdd.addEventListener('click', () => {
    popupAddCard.open();
    addFormValidator.toggleButtonState();
});

const popupDeleteCard = new PopupWithSubmit('.popup_type_delete', {
    handleSubmit: (data) => {
        api.deleteCard(data)
            .then(() => {
                popupDeleteCard.close();
            })
            .catch((err) => {
                console.log(err);
            })
    }
})

const popupOpenPicture = new PopupWithImage('.popup_type_image');

const createNewCard = (data) => {
    const card = new Card({
        data, userId,
        handleCardClick: () => {
            popupOpenPicture.open(data.name, data.link);
        },
        handleDeleteClick: () => {
            popupDeleteCard.open();
            popupDeleteCard.handleSubmitConfirm(() => {
                api.deleteCard(card._id)
                    .then(() => {
                        card.deleteCard();
                        popupDeleteCard.close();
                    })
                    .catch((err) => {
                        console.log(err);
                    })
            })
        },
        handleLikeCard: () => {
            if (card.isLiked()) {
                api.deleteLike(card._id)
                    .then((data) => {
                        card.deleteLike();
                        card.setLike(data.likes);
                    })
                    .catch((err) => {
                        console.log(err);
                    })

            } else {
                api.setLike(card._id)
                    .then((data) => {
                        card.addLike();
                        card.setLike(data.likes);
                    })
                    .catch((err) => {
                        console.log(err);
                    })
            }
        }
        }, elementItemTemplate);
    return card.createCard();
}

popupEditProfile.setEventListeners();
popupEditNewAvatar.setEventListeners();
popupAddCard.setEventListeners();
popupDeleteCard.setEventListeners();
popupOpenPicture.setEventListeners();

const profileFormValidator = new FormValidator(validationConfig, popupEdit);
profileFormValidator.enableValidation();
const addFormValidator = new FormValidator(validationConfig, formAdd);
addFormValidator.enableValidation();
const avatarValidator = new FormValidator(validationConfig, popupEditAvatar);
avatarValidator.enableValidation();