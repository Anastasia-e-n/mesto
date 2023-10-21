import Popup from "./Popup";

export class PopupWithForm extends Popup{
    constructor(popupSelector, {submitHandler}) {
        super(popupSelector);
        this._submitHandler = submitHandler;
        this._form = this._popup.querySelector('.form');
        this._inputList = this._form.querySelectorAll('.form__item');
        this._buttonSubmit = this._form.querySelector('.form__button');
        this._buttonSubmitText = this._buttonSubmit.textContent;
    }

    _getInputValues() {
      const value = {}
        this._inputList.forEach((input) => {
          value[input.name] = input.value
        })
      return value
    }

    renderLoading(isLoading) {
        if (isLoading) {
            this._buttonSubmit.textContent = 'Сохранение...';
        } else {
            this._buttonSubmit.textContent = this._buttonSubmitText;
        }
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', () => {
            this._submitHandler(this._getInputValues());
        });
    }

    close() {
        super.close();
        this._form.reset();
    }
}

// import Popup from './Popup.js';

// export class PopupWithForm extends Popup {
//     constructor(popupSelector, {submitHandler}) {
//       super(popupSelector);
//       this._submitHandler = submitHandler;
//       this._form = this._popup.querySelector('.form');
//       this._inputList = this._form.querySelectorAll('.form__item');
//       this._buttonSubmit = this._form.querySelector('.form__button');
//       this._buttonSubmitText = this._buttonSubmit.textContent;
//     }
  
//     _getInputValues() {
//         const value = {}
//         this._inputList.forEach((input) => {
//             value[input.name] = input.value
//         })
//         return value
//     }

//     setEventListeners() {
//       super.setEventListeners()
//       this._form.addEventListener("submit", (evt) => {
//           evt.preventDefault();
//           this._submitHandler(this._getInputValues());
//           this.close();
//       })
//     }

//     renderLoading(isLoading) {
//       if (isLoading) {
//           this._buttonSubmit.textContent = 'Сохранение...';
//       } else {
//           this._buttonSubmit.textContent = this._buttonSubmitText;
//       }
//     }

//     close() {
//       super.close();
//       this._form.reset();
//     }
// }

