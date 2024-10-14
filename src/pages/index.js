import '../index.css';
import { Section } from '../components/Section.js';
import { Popup } from '../components/Popup.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { initialCards } from '../utils/initialCards.js';
import { Card } from '../components/Card.js';

const nameProfile = document.querySelector('.profile__name').textContent;
const descriptionProfile = document.querySelector('.profile__description').textContent;
const inputValuesProfile = {
 name: nameProfile,
 description: descriptionProfile
}
const editProfileButton = document.querySelector('.button_editProfile');
const addCardButton = document.querySelector('.button_addCard');
const popupEditProfile = document.querySelector('.popup-editProfile');
const popupAddCard = document.querySelector('.popup-createCard');
const popupImg = document.querySelector('.popup-img');
const popups = Array.from(document.querySelectorAll('.popup'));
const validateData = {
  formSelector: '.popup__form',
  inputSelector: '.popup__field-text',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__field-text-error',
  errorClass: 'popup__field-text_error'
}

const cardsList = new Section ({items: initialCards,
  renderer: (item)=>{ 
    const card = new Card(item, '#card', popupImg);
    return card.generateCard();  
  }
}, '.cards');
cardsList.renderItems();

const editProfilePopup = new Popup('.popup-editProfile');
editProfilePopup.setEventListeners();

editProfileButton.addEventListener('click', () => {
  editProfilePopup.open();
 });

const popupImage = new PopupWithImage('.popup-img');
const imageData = {
  src: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
  name: 'Архыз'
}
popupImage.setEventListeners();
popupImage.open(imageData);

// editProfileButton.addEventListener('click', () => {
//   openPopup(popupEditProfile,inputValuesProfile);
// });

// addCardButton.addEventListener('click', () => {
//   openPopup(popupAddCard);
// })

function setInputPopup(popup, inputValues) {
  nameField = popup.querySelector('.popup-name');
  descriptionField = popup.querySelector('.popup-description');
  nameField.value = inputValues.name;
  descriptionField.value = inputValues.description;
}

// function openPopup (popup, inputValues = '', imgData = '') {
//   const form = popup.querySelector(validateData.formSelector);
//   if(inputValues){
//     setInputPopup(popup, inputValues);

//   } else if(imgData) {
//     const image = popup.querySelector('.popup-img__image');
//     image.src = imgData.src;
//     image.alt = imgData.name;
//     popup.querySelector('.popup-img__text').textContent = imgData.name;
//   }
//   if(form) {
//     const submitButton = form.querySelector(validateData.submitButtonSelector);
//     const inputList = Array.from(form.querySelectorAll(validateData.inputSelector));
//     checkInputs(form,inputList, submitButton, validateData);
//   }
//   popup.classList.add('popup_opened');
//   document.addEventListener('keyup', closePopupInputEsc);
// }

// function closePopup() {
//   popups.forEach((popup) => {
//     document.removeEventListener('keyup', closePopupInputEsc);
//     popup.classList.remove('popup_opened');
//   })
// }

function handleSubmitEditProrileForm(evt) {
    evt.preventDefault();
    profileName.textContent = popupEditProfile.querySelector('.popup-name').value;
    profileDescription.textContent = popupEditProfile.querySelector('.popup-description').value;
    closePopup(popupEditProfile);

}

function handleSubmitAddCardForm(evt) {
  evt.preventDefault();
  const name = evt.srcElement.querySelector('.popup-name').value;
  const url = evt.srcElement.querySelector('.popup-description').value;
  const card = createCard(url, name);
  renderObject(card, cards, 'start');
  closePopup(popupAddCard);
}

// enableValidation(validateData);
