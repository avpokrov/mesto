export class Card {
  constructor(dataCard, template, openPopupImage, deleteCard) {
    this._dataCard = dataCard;
    this._template = template;
    this._openPopupImage = openPopupImage;
    this._deleteCard = deleteCard;
  }
  _getTemplate() {
    const cardElement = document.querySelector(this._template).content
      .querySelector('.card').cloneNode(true);
    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();
    const cardImg = this._element.querySelector('.card__img');
    const cardName = this._element.querySelector('.card__name');
    cardImg.src = this._dataCard.link;
    cardImg.alt = this._dataCard.name;
    cardName.textContent = this._dataCard.name;
    return this._element;
  }

  _setEventListeners() {
    this._element.querySelector('.like').addEventListener('click', () => {
      this._handleClickLike();
    })
    this._element.querySelector('.trash').addEventListener('click', () => {
      this._deleteCard(this);     
    })
    this._element.querySelector('.card__img').addEventListener('click', () => {
      this._openPopupImage({ src: this._link, name: this._name });
    })
  }

  _handleClickLike() {
    this._element.querySelector('.like').classList.toggle('like_active');
  }

  remove() {
    this._element.remove();
  }

  getId() {
     return this._dataCard._id;
  }

}
