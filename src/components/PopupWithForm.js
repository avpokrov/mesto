import { Popup } from "./Popup";

export class PopupWithForm extends Popup {
    constructor(popupSelector, submitForm) {
        super(popupSelector);
        this._submitForm = submitForm;
        this._form = this._popup.querySelector('.popup__form');
    }
    _getInputValues(){

    }

    _acceptForm(){
        this._submitForm();
        super.close();

    }

    setEventListeners() {
        this._form.addEventListener('submit', this._acceptForm());
        super.setEventListeners();
    }
}