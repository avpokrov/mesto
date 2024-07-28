const nameProfile = document.querySelector('.profile__name').textContent;
const descriptionProfile = document.querySelector('.profile__description').textContent;
const inputValuesProfile = {
 name: nameProfile,
 description: descriptionProfile
}
const editProfileButton = document.querySelector('.button_editProfile');
const addCardButton = document.querySelector('.button_addCard');
const cards = document.querySelector('.cards');
const popupEditProfile = document.querySelector('.popup-editProfile');
const popupAddCard = document.querySelector('.popup-createCard');
const popupImg = document.querySelector('.popup-img');
const temlateCard = document.querySelector('#card').content;
const popups = Array.from(document.querySelectorAll('.popup'));
const validateData = {
  formSelector: '.popup__form',
  inputSelector: '.popup__field-text',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__field-text-error',
  errorClass: 'popup__field-text_error'
}

function initialForms() {
  popups.forEach((popup) => {
    popup.addEventListener('click', (evt) => {
      if(evt.target.classList.contains('button_close') || evt.target.classList.contains('popup')){
        closePopup();
      }
    });
    const form = popup.querySelector('.popup__form');
    if(form) {
      const nameForm = form.name;
      if(nameForm === 'editProfile'){
        setInputPopup(popup, inputValuesProfile);
        form.addEventListener('submit', (evt) => {
          handleSubmitEditProrileForm(evt);
        })
      } else if(nameForm === 'addCard') {
        form.addEventListener('submit', (evt) => {
          handleSubmitAddCardForm(evt);
        })
      }
    }
  })
}

const closePopupInputEsc = (evt) => {
  if(evt.key === 'Escape'){
    closePopup();
  }
}

initialForms();

initialCards.forEach( (item) => {
  const card = createCard(item.link, item.name);
  renderObject(card, cards);
});

function createCard(image, name) {
  const card = temlateCard.querySelector('.card').cloneNode(true);
  const cardImg =  card.querySelector('.card__img');
  const cardName = card.querySelector('.card__name');
  cardImg.src = image;
  cardImg.alt = name;
  cardName.textContent = name;
  const like = card.querySelector('.like');
  const trash = card.querySelector('.trash');
  card.querySelector('.card__img').addEventListener('click', () => {
    openPopup(popupImg, '', {name: name, src: image})});
  like.addEventListener('click', () => {
    like.classList.toggle('like_active');
  });
  trash.addEventListener('click', () => {
    card.remove();
  })
  return card;
}

function renderObject(item, target, position) {
  if (position === 'start'){
    target.prepend(item);
  } else {
    target.append(item);
  }
}

editProfileButton.addEventListener('click', () => {
  openPopup(popupEditProfile,inputValuesProfile);
});

addCardButton.addEventListener('click', () => {
  openPopup(popupAddCard);
})

function setInputPopup(popup, inputValues) {
  nameField = popup.querySelector('.popup-name');
  descriptionField = popup.querySelector('.popup-description');
  nameField.value = inputValues.name;
  descriptionField.value = inputValues.description;
}

function openPopup (popup, inputValues = '', imgData = '') {
  const form = popup.querySelector(validateData.formSelector);
  if(inputValues){
    setInputPopup(popup, inputValues);
  
  } else if(imgData) {
    const image = popup.querySelector('.popup-img__image');
    image.src = imgData.src;
    image.alt = imgData.name;
    popup.querySelector('.popup-img__text').textContent = imgData.name;
  }
  if(form) {
    const submitButton = form.querySelector(validateData.submitButtonSelector);
    const inputList = Array.from(form.querySelectorAll(validateData.inputSelector));
    checkInputs(form,inputList, submitButton, validateData);
  }
  popup.classList.add('popup_opened');
  document.addEventListener('keyup', closePopupInputEsc);
}

function closePopup() {
  popups.forEach((popup) => {
    document.removeEventListener('keyup', closePopupInputEsc);
    popup.classList.remove('popup_opened');
  })
}

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

enableValidation(validateData);
