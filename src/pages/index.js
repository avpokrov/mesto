import '../index.css';
import { Section } from '../components/Section.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { Card } from '../components/Card.js';
import { UserInfo } from '../components/UserInfo.js';
import { ValidateForms } from '../components/ValidateForms.js';
import { Api } from '../components/Api.js';

import {
  initialCards,
  popupEditElement,
  popupEditForm,
  popupAddCardElement,
  popupAddCardForm,
  popupImageElement,
  validateData,
  editProfileButton,
  addCardButton,
  apiParams
} from '../utils/constants.js';

let userInfo;
const userProfile = new UserInfo({
  name: '.profile__name',
  description: '.profile__description',
  avatar: '.profile__image'
});

const apiMetod = new Api(apiParams);
apiMetod.getMyInfo()
  .then((userData) => {
    userProfile.setUserInfo(userData)
    userInfo = userData;
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
const sectionCard = new Section(renderCard,'.cards');

apiMetod.getCards()
  .then((cards) => {
    sectionCard.renderItems(cards);
  })
  .catch ((err) => console.log(err));

const editProfilePopup = new PopupWithForm(popupEditElement, (dataUser) => {
  apiMetod.editProfile(dataUser)
    .then((dataUser) => {
      userProfile.setUserInfo(dataUser);
      userInfo = dataUser
    })
    .catch(err => console.log(err))
});
editProfilePopup.setEventListeners();

const popupAddCard = new PopupWithForm(popupAddCardElement, (dataCard) => {
  apiMetod.addCard(dataCard)
    .then((datacard) => {
      console.log(datacard);
      const card = renderCard({
        name: datacard.name,
        link: datacard.link
      });
      sectionCard.addItem(card);
    })
    .catch(err => console.log(err));
});

popupAddCard.setEventListeners();


const validationFormsEditProfile = new ValidateForms(validateData, popupEditForm);
validationFormsEditProfile.enableValidation();

const validationFormsAddCard = new ValidateForms(validateData, popupAddCardForm);
validationFormsAddCard.enableValidation();

editProfileButton.addEventListener('click', () => {
  editProfilePopup.setInputsForm(userInfo);
  validationFormsEditProfile.resetValidation();
  editProfilePopup.open();
});

addCardButton.addEventListener('click', () => {
  validationFormsAddCard.resetValidation();
  popupAddCard.open();
});
