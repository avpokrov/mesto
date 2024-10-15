import { Popup } from "./Popup";

export class PopupWithForm extends Popup {
    constructor(popupSelector, submitForm) {
        super(popupSelector);
        this._submitForm = submitForm;
        this._form = this._popup.querySelector('.popup__form');
        this._inputs = this._form.querySelectorAll('.popup__input');
    }
    _getInputValues(){
        const inputs = {};
        this._inputs.forEach((input) => {
            inputs[input.id] = input.value;
        })
        return inputs;

    }

    setEventListeners() {
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._submitForm();
            console.log(this._getInputValues());
            this.close();
        });
        super.setEventListeners();
    }

    close(){
        this._form.reset();
        super.close();
    }
}