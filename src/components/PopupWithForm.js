import { Popup } from "./Popup";

export class PopupWithForm extends Popup {
    constructor(popup, submitForm) {
        super(popup);
        this._submitForm = submitForm;
        this._form = this._popup.querySelector('.popup__form');
        this._inputs = this._form.querySelectorAll('.popup__input');
        this._button = this._form.querySelector('.popup__button');
        this._buttonText = this._button.textContent;
    }
    _getInputValues() {
        const inputs = {};
        this._inputs.forEach((input) => {
            inputs[input.name] = input.value;
        })
        return inputs;

    }

    setInputsForm(dataInputs){        
        this._inputs[0].value = dataInputs.name;
        this._inputs[1].value = dataInputs.about;
    }

    setEventListeners() {
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._submitForm(this._getInputValues());
            this.close();
        });
        super.setEventListeners();
    }

    close() {
        this._form.reset();
        super.close();
    }
    activeLoad() {
        this._button.textContent = 'Сохранение...';
    }
    finishLoad() {
        this._button.textContent = this._buttonText;
    }
}