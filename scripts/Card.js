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
        this._setEventListeners();
        const cardImg =  this._element.querySelector('.card__img');
        const cardName = this._element.querySelector('.card__name');
        cardImg.src = this._link;
        cardImg.alt = this._name;
        cardName.textContent = this._name;
        return this._element;
    }

    _setEventListeners(){
      this._element.querySelector('.like').addEventListener('click', () => {
        this._handleClickLike();
      })
      this._element.querySelector('.trash').addEventListener('click', ()=> {
        this._element.remove();
      })
      this._element.querySelector('.card__img').addEventListener('click', ()=> {
        this._openPopupImage();
      })
    }

    _handleClickLike(){
      this._element.querySelector('.like').classList.toggle('like_active');
    }

    _handleClickTrash(){
      this._element.remove();
    }

    _openPopupImage(){
      const popup = document.querySelector('.popup-img');
      const image = popup.querySelector('.popup-img__image');
      image.src = this._link;
      image.alt = this._name;
      popup.querySelector('.popup-img__text').textContent = this._name;
      popup.classList.add('popup_opened');
    }

 }
