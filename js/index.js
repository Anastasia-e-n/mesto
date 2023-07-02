let editButtonElement = document.querySelector('.profile__edit-button');
let closeButtonElement = document.querySelector('.popup__close-button');
let popupElement = document.querySelector('.popup');
let nameEditElement = document.querySelector('.profile__title');
let jobEditElement = document.querySelector('.profile__subtitle');


function handleClick() {
	popupElement.classList.toggle('popup--opened');
}

editButtonElement.addEventListener('click', handleClick);
closeButtonElement.addEventListener('click', handleClick);

popupElement.addEventListener('click', (e) => {
	if (e.target === e.currentTarget) {
		popupElement.classList.toggle('popup--opened');
	}
});

let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('#nameInput');
let jobInput = document.querySelector('#jobInput');

function handleFormSubmit (evt) {
    evt.preventDefault();
    handleClick();
    nameEditElement.textContent = nameInput.value;
    jobEditElement.textContent = jobInput.value;
}
formElement.addEventListener('submit', handleFormSubmit);





