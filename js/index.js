// переменные для редактирования профиля

let popupEdit = document.querySelector('#popup_edit');
let buttonCloseEdit = popupEdit.querySelector('.popup__close-button');
let buttonEdit = document.querySelector('.profile__edit-button');
let nameEdit = document.querySelector('.profile__title');
let jobEdit = document.querySelector('.profile__subtitle');
let formEdit = document.querySelector('#popup-edit-form');
let nameInput = document.querySelector('#nameInput');
let jobInput = document.querySelector('#jobInput');

// переменные для вывода изображения

let popupImage = document.querySelector('#popup_image');
let buttonCloseImage = popupImage.querySelector('.popup__close-button');
let popupImagePic = popupImage.querySelector('.popup__image');
let popupCaption = popupImage.querySelector('.popup__caption');

// переменные для добавления карточки

let list = document.querySelector('.element-grid');
let popupAdd = document.querySelector('#popup_add');
let buttonAdd = document.querySelector('.profile__add-button');
let buttonCloseAdd = popupAdd.querySelector('.popup__close-button');
let formAdd = document.querySelector('#popup-add-form');
let titleInput = document.querySelector('#titleInput');
let linkInput = document.querySelector('#linkInput');
let elementItemTemplate = document.querySelector('#element-grid_template').content.querySelector('.element-grid__wrapper');
let initialCards = [
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

// функции для вывода изобрадения и генерации карточки

initialCards.forEach(function(item) {
  let elementItem = generateCard(item);
  list.append(elementItem);
});

function generateCard(item) {
  let elementItem = elementItemTemplate.cloneNode(true);
  let elementItemTitle = elementItem.querySelector('.element-grid__title');
  let elementItemImage = elementItem.querySelector('.element-grid__image-place');
  let likeButton = elementItem.querySelector('.element-grid__image-like');
  let removeButton = elementItem.querySelector('.element-grid__remove');
  let imageButton = elementItem.querySelector('.element-grid__image-place');
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
  let elementItem = generateCard({name: titleInput.value , link: linkInput.value});
  let formAdd = document.querySelector('#popup-add-form');

  evt.preventDefault();
  list.prepend(elementItem);
  closePopup(popupAdd);
  formAdd.reset();
};

// Функции для редактирования профиля

function openPopup(popup) {
	popup.classList.add('popup_opened')
};

function closePopup(popup) {
	popup.classList.remove('popup_opened')
};

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