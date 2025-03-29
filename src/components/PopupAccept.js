import { Popup } from "./Popup";

export class PopupWithForm extends Popup {
    constructor(popup, submit) {
        super(popup);
        this._submit = submit;
        this._buttonOn = this._popup.querySelector('.popup__form');
        this._buttonOff = this._popup.querySelector('.popup__form');
        
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
}