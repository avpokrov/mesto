export class Popup {
    constructor (popup) {
        this._popup = popup;
        this._handleEscClose = this._handleEscClose.bind(this);
    }

    open(){
        this._popup.classList.add('popup_opened');
        document.addEventListener('keyup', this._handleEscClose);
    }

    close(){    
        document.removeEventListener('keyup', this._handleEscClose);
        this._popup.classList.remove('popup_opened');

    }

    setEventListeners() {
        this._popup.addEventListener('click', evt => { 
            if (evt.target === this._popup || evt.target.classList.contains('button_close')) { 
                this.close(); 
            } 
        }); 


    }

    _handleEscClose(evt) {
        if (evt.key === 'Escape') {
            this.close();
        }
    }
}