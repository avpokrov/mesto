import { Popup } from "./Popup";

export class PopupWithForm extends Popup {
    constructor(popup, submitForm) {
        super(popup);
        this._submitForm = submitForm;
        this._form = this._popup.querySelector('.popup__form');
        this._inputs = this._form.querySelectorAll('.popup__input');
    }
    _getInputValues() {
        const inputs = {};
        this._inputs.forEach((input) => {
            inputs[input.name] = input.value;
        })
        return inputs;

    }

    setInputsForm(dataInput){
        this._inputs[0].value = dataInput.name;
        this._inputs[1].value = dataInput.description;
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
}