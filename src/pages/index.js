import '../index.css';
import { Section } from '../components/Section.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { Card } from '../components/Card.js';
import { UserInfo } from '../components/UserInfo.js';
import { ValidateForms } from '../components/ValidateForms.js';

import {
  initialCards,
  popupEditElement,
  popupEditForm,
  popupAddCardElement,
  popupAddCardForm,
  popupImageElement,
  validateData,
  editProfileButton,
  addCardButton
} from '../utils/constants.js';

fetch('http://10.202.0.5:3005/users/me', {    
  headers: {
    authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2UwNTI4ZGRjN2VjMWYyNjRhNThmNDIiLCJpYXQiOjE3NDI3NTQ2ODIsImV4cCI6MTc3NDI5MDY4Mn0.fAro91RhT-J4cAxexlLZDd0M7xSdi3VnmfBrniQQhnA'
  },
})
  .then(res => res.json())
  .then((result) => {
    console.log(result);
  }); 


const userInfo = new UserInfo({
  name: '.profile__name',
  description: '.profile__description'
})

const popupImage = new PopupWithImage(popupImageElement);
popupImage.setEventListeners();
const openPopupImage = (imageData) => {
  popupImage.open(imageData);
}

const renderCard = (item) => {
  const card = new Card(item, '#card', openPopupImage);
  return card.generateCard();
}

const section = new Section({
  items: initialCards,
  renderer: renderCard
}, '.cards');
section.renderItems();


const editProfilePopup = new PopupWithForm(popupEditElement, (dataUser) => {
  userInfo.setUserInfo(dataUser);
});
editProfilePopup.setEventListeners();

const popupAddCard = new PopupWithForm(popupAddCardElement, (dataCard) => {
  const card = renderCard({
    name: dataCard.name,
    link: dataCard.link
  });
  section.addItem(card);
});

popupAddCard.setEventListeners();


const validationFormsEditProfile = new ValidateForms(validateData, popupEditForm);
validationFormsEditProfile.enableValidation();

const validationFormsAddCard = new ValidateForms(validateData, popupAddCardForm);
validationFormsAddCard.enableValidation();

editProfileButton.addEventListener('click', () => {
  editProfilePopup.setInputsForm(userInfo.getUserInfo());
  validationFormsEditProfile.resetValidation();
  editProfilePopup.open();
});

addCardButton.addEventListener('click', () => {
  validationFormsAddCard.resetValidation();
  popupAddCard.open();
});
