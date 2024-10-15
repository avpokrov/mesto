import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
    constructor(popupSelector){
        super(popupSelector); 
        this._image = this._popup.querySelector('.popup-img__image'); 
        this._text = this._popup.querySelector('.popup-img__text');
    }
    open(imageData){     
        console.log(this._image);           
        this._image.src = imageData.src;
        this._image.alt = imageData.name;
        this._text.textContent = imageData.name;
        super.open();
    }
}