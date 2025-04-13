import { Popup } from "./Popup";

export class PopupAccept extends Popup {
    constructor(popup) {
        super(popup);
        this._buttonAccept = this._popup.querySelector('.popup__button_accept_accept');
        this._buttonCancel = this._popup.querySelector('.popup__button_accept_cancel');
        
    }

    addEvent(submit) {
        this._submit = submit;
    }

    setEventListeners() {
        this._buttonAccept.addEventListener('click', () => {
            this._submit();
            this.close();
        });
        this._buttonCancel.addEventListener('click', () => {            
            this.close();
        });
        super.setEventListeners();
    }
}