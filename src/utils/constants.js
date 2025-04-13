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
export const popupAcceptElement = document.querySelector('.popup-accept');
export const popupUpdateAvatarElement = document.querySelector('.popup-updateAvatar');
export const popupUpdateAvatarForm = popupUpdateAvatarElement.querySelector('.popup__form');
export const validateData = {
  inputSelector: '.popup__field-text',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__field-text-error',
  errorClass: 'popup__field-text_error'
}
export const editProfileButton = document.querySelector('.button_editProfile');
export const addCardButton = document.querySelector('.button_addCard');
export const updateButtonAvatar = document.querySelector('.profile__wrapper');
export const apiParams = {
  headers: {
    authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2UwNTI4ZGRjN2VjMWYyNjRhNThmNDIiLCJpYXQiOjE3NDI3NTQ2ODIsImV4cCI6MTc3NDI5MDY4Mn0.fAro91RhT-J4cAxexlLZDd0M7xSdi3VnmfBrniQQhnA',
//    authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2ZhM2RkOTVlNDhmNDgwZjg5Y2E5OTciLCJpYXQiOjE3NDQ0NTMxMDksImV4cCI6MTc3NTk4OTEwOX0.XFZXqMKb9fmozT1JOL1WB-UFXWJhviEEEZ09kAJH1mQ',
    'Content-Type': 'application/json'
  },
  baseURL: 'http://10.202.0.5:3005'
}

