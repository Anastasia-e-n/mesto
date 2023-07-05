let editButtonElement = document.querySelector('.profile__edit-button');
let closeButtonElement = document.querySelector('.popup__close-button');
let popupElement = document.querySelector('.popup');
let nameEditElement = document.querySelector('.profile__title');
let jobEditElement = document.querySelector('.profile__subtitle');
let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('#nameInput');
let jobInput = document.querySelector('#jobInput');

function openPopup(evt) {
	evt.preventDefault();
	popupElement.classList.add('popup_opened');
	nameInput.value = nameEditElement.textContent;
	jobInput.value = jobEditElement.textContent;
}

function closePopup(evt) {
	evt.preventDefault();
	popupElement.classList.remove('popup_opened');
}

function handleFormSubmit(evt) {
	evt.preventDefault();
	closePopup(evt);
	nameEditElement.textContent = nameInput.value;
   jobEditElement.textContent = jobInput.value;
}

editButtonElement.addEventListener('click', openPopup);
closeButtonElement.addEventListener('click', closePopup);
formElement.addEventListener('submit', handleFormSubmit)
