export class Card {
  constructor(dataCard, template, openPopupImage, popupAccept, deleteCard, userID, changeLike) {
    this._dataCard = dataCard;
    this._template = template;
    this._openPopupImage = openPopupImage;
    this._deleteCard = deleteCard;
    this._popupAccept = popupAccept;
    this._userID = userID;
    this._changeLike = changeLike;
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
    const trash = this._element.querySelector('.trash');
    const likeCount = this._element.querySelector('.like__sum');
    const cardLike = this._element.querySelector('.like');
    likeCount.textContent = this._dataCard.likes.length;
    cardImg.src = this._dataCard.link;
    cardImg.alt = this._dataCard.name;
    cardName.textContent = this._dataCard.name;
    if (this._userID != this._dataCard.owner){
      trash.remove();
    }
    if (this._checkLikeCadr()){
      cardLike.classList.add('like_active');
    }
    return this._element;
  }

  _setEventListeners() {
    this._element.querySelector('.like').addEventListener('click', () => {
      this._handleClickLike();
    })
    this._element.querySelector('.trash').addEventListener('click', () => {
      this._popupAccept.open();
      this._popupAccept.addEvent(() => this._deleteCard(this));  
    })
    this._element.querySelector('.card__img').addEventListener('click', () => {
      this._openPopupImage({ src: this._dataCard.link, name: this._dataCard.name });
    })
  }

  _handleClickLike() {
    if (this._checkLikeCadr()){
      this._changeLike(this, 'DELETE');
    } else {
      this._changeLike(this, 'PUT');
      this._element.querySelector('.like').classList.add('like_active');
    }
  }

  remove() {
    this._element.remove();
  }

  getId() {
     return this._dataCard._id;
  }

 _checkLikeCadr(){
    return this._dataCard.likes.includes(this._userID);
 }

 displayLike(card){
    this._dataCard = card;
    if(this._checkLikeCadr()){
      this._element.querySelector('.like').classList.add('like_active');
    } else {
      this._element.querySelector('.like').classList.remove('like_active');
    }
    this._element.querySelector('.like__sum').textContent = card.likes.length; 
 } 

}
