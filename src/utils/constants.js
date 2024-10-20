export const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

export const popupEditElement = document.querySelector('.popup-editProfile');
export const popupEditForm = popupEditElement.querySelector('.popup__form');
export const popupAddCardElement = document.querySelector('.popup-createCard');
export const popupAddCardForm = popupAddCardElement.querySelector('.popup__form');
export const popupImageElement = document.querySelector('.popup-img');
export const validateData = {
  inputSelector: '.popup__field-text',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__field-text-error',
  errorClass: 'popup__field-text_error'
}
export const editProfileButton = document.querySelector('.button_editProfile');
export const addCardButton = document.querySelector('.button_addCard');

