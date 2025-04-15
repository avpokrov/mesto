import '../index.css';
import { Section } from '../components/Section.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { PopupAccept } from '../components/PopupAccept.js';
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
  popupAcceptElement,
  popupImageElement,
  popupUpdateAvatarElement,
  validateData,
  editProfileButton,
  addCardButton,
  updateButtonAvatar,
  popupUpdateAvatarForm,
  apiParams
} from '../utils/constants.js';

const userProfile = new UserInfo({
  name: '.profile__name',
  description: '.profile__description',
  avatar: '.profile__image'
});

const popupDelCard = new PopupAccept(popupAcceptElement)
popupDelCard.setEventListeners();


const apiMetod = new Api(apiParams);

const popupUpdateAvatar = new PopupWithForm(popupUpdateAvatarElement, (urlAvatar) => {
  popupUpdateAvatar.statusLoad(false);
  apiMetod.updateAvatar(urlAvatar)
    .then((user) => {
      userProfile.setUserInfo(user);
    })
    .catch((err) => console.log('Ошибка обновления аватара: ', err))
    .finally(() => popupUpdateAvatar.statusLoad(true))
});
popupUpdateAvatar.setEventListeners();

//   initialCards.forEach((dataCard) => {
//     apiMetod.addCard(dataCard)
//     .then((datacard) => {
//       const card = renderCard(datacard);
//       sectionCard.addItem(card);
//     })
//     .catch(err => console.log(err));
// });


const popupImage = new PopupWithImage(popupImageElement);
popupImage.setEventListeners();

const renderCard = (item) => {
  const card = new Card({
    dataCard: item,
    selector: '#card',
    user: userProfile.getUserID(),
    cardClick: (imageData) => popupImage.open(imageData),
    delCardClick: (card) => {
      popupDelCard.addEvent(() => {
        apiMetod.delCard(card.getId())
          .then((res) => {
            card.remove();
          })
          .catch((err) => console.log('Ошибка удаления', err))
      })
      popupDelCard.open();
    },
    likeClick: (card, method) => {
      apiMetod.changeLikeCard(card.getId(), method)
        .then((newCard) => {
          card.displayLike(newCard);
        })
        .catch((err) => console.log('Ошибка постановки (снятия) лайка', err))
    }
  });
  return card.generateCard();
}
const sectionCard = new Section(renderCard, '.cards');

const editProfilePopup = new PopupWithForm(popupEditElement, (dataUser) => {
  editProfilePopup.statusLoad(false);
  apiMetod.editProfile(dataUser)
    .then((dataUser) => {
      userProfile.setUserInfo(dataUser);
    })
    .catch(err => console.log(err))
    .finally(() => editProfilePopup.statusLoad(true))
});
editProfilePopup.setEventListeners();

const popupAddCard = new PopupWithForm(popupAddCardElement, (dataCard) => {
  popupAddCard.statusLoad(false);
  apiMetod.addCard(dataCard)
    .then((datacard) => {
      const card = renderCard(datacard);
      sectionCard.addItem(card);
    })
    .catch(err => console.log(err))
    .finally(() => popupAddCard.statusLoad(true))
});

popupAddCard.setEventListeners();


const validationFormsEditProfile = new ValidateForms(validateData, popupEditForm);
validationFormsEditProfile.enableValidation();

const validationFormsAddCard = new ValidateForms(validateData, popupAddCardForm);
validationFormsAddCard.enableValidation();

const validationFormsUpdateAvatar = new ValidateForms(validateData, popupUpdateAvatarForm);
validationFormsUpdateAvatar.enableValidation();

editProfileButton.addEventListener('click', () => {
  editProfilePopup.setInputsForm(userProfile.getUserInfo());
  validationFormsEditProfile.resetValidation();
  editProfilePopup.open();
});

addCardButton.addEventListener('click', () => {
  validationFormsAddCard.resetValidation();
  popupAddCard.open();
});

updateButtonAvatar.addEventListener('click', () => {
  validationFormsUpdateAvatar.resetValidation();
  popupUpdateAvatar.open();
})

Promise.all([apiMetod.getMyInfo(), apiMetod.getCards()])
  .then(([userData, cards]) => {
    userProfile.setUserInfo(userData);
    sectionCard.renderItems(cards);
  })
  .catch((err) => console.log(err));

