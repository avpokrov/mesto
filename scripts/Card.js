export class Card {
    constructor(dataCard, template){
        this._name = dataCard.name;
        this._link = dataCard.link;
        this._template = template;
    } 
    _getTemplate() {
        const cardElement = document.querySelector(this._template).content
                     .querySelector('.card').cloneNode(true);
        return cardElement;
    }

    generateCard(){
        this._element = this._getTemplate();
        const cardImg =  this._element.querySelector('.card__img');
        const cardName = this._element.querySelector('.card__name');
        cardImg.src = this._link;
        cardImg.alt = this._name;
        cardName.textContent = this._name;
        return this._element;
    }

}