// переменные для редактирования профиля

const popupEdit = document.querySelector('.popup_type_profile');
const buttonCloseEdit = popupEdit.querySelector('.popup__close-button');
const buttonEdit = document.querySelector('.profile__edit-button');
const nameEdit = document.querySelector('.profile__title');
const jobEdit = document.querySelector('.profile__subtitle');
const formEdit = document.querySelector('#popup-edit-form');
const nameInput = document.querySelector('#nameInput');
const jobInput = document.querySelector('#jobInput');

// переменные для вывода изображения

const popupImage = document.querySelector('.popup_type_image');
const buttonCloseImage = popupImage.querySelector('.popup__close-button');
const popupImagePic = popupImage.querySelector('.popup__image');
const popupCaption = popupImage.querySelector('.popup__caption');

// переменные для добавления карточки

const list = document.querySelector('.element-grid');
const popupAdd = document.querySelector('.popup_type_card-add');
const buttonAdd = document.querySelector('.profile__add-button');
const buttonCloseAdd = popupAdd.querySelector('.popup__close-button');
const formAdd = document.querySelector('#popup-add-form');
const titleInput = document.querySelector('#titleInput');
const linkInput = document.querySelector('#linkInput');
const elementItemTemplate = document.querySelector('.element-grid_template').content.querySelector('.element-grid__wrapper');

// функции для вывода изображения и генерации карточки

initialCards.forEach(function(item) {
  const elementItem = generateCard(item);
  list.append(elementItem);
});

function generateCard(item) {
  const elementItem = elementItemTemplate.cloneNode(true);
  const elementItemTitle = elementItem.querySelector('.element-grid__title');
  const elementItemImage = elementItem.querySelector('.element-grid__image-place');
  const likeButton = elementItem.querySelector('.element-grid__image-like');
  const removeButton = elementItem.querySelector('.element-grid__remove');
  const imageButton = elementItem.querySelector('.element-grid__image-place');
  elementItemTitle.textContent = item.name;
  elementItemImage.src = item.link;
  elementItemImage.alt = item.name;

  likeButton.addEventListener('click', function (){
    likeButton.classList.toggle('element-grid__image-like_active');
  });

  removeButton.addEventListener('click', function () {
    removeButton.closest('.element-grid__wrapper').remove()
  }); 

  imageButton.addEventListener('click', function () {
    popupImagePic.src = item.link;
    popupCaption.textContent = item.name;
    popupImagePic.alt = item.name;
    openPopup(popupImage);
  }); 
  
  return elementItem;
};

// функция добавления карточки 

function addCard (evt) {
  const elementItem = generateCard({name: titleInput.value , link: linkInput.value});

  evt.preventDefault();
  list.prepend(elementItem);
  closePopup(popupAdd);
  formAdd.reset();
};

// функции для открытия и закрытия popup

function openPopup(popup) {
	popup.classList.add('popup_opened')
};

function closePopup(popup) {
	popup.classList.remove('popup_opened')
};

// функции для редактирования профиля

buttonEdit.addEventListener('click', function (){
	nameInput.value = nameEdit.textContent;
	jobInput.value = jobEdit.textContent;
	openPopup(popupEdit);
}); 

function handleFormSubmit (evt) {
	evt.preventDefault(); 
		nameEdit.textContent = nameInput.value;
		jobEdit.textContent = jobInput.value;
  	closePopup(popupEdit);
};

formEdit.addEventListener('submit', handleFormSubmit);
formAdd.addEventListener('submit', addCard);

buttonCloseEdit.addEventListener('click', () => closePopup(popupEdit));
buttonAdd.addEventListener('click', () => openPopup(popupAdd));
buttonCloseAdd.addEventListener('click', () => closePopup(popupAdd));
buttonCloseImage.addEventListener('click', () => closePopup(popupImage));