const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');
const editProfileButton = document.querySelector('.button_editProfile');
const addCardButton = document.querySelector('.button_addCard');
const cards = document.querySelector('.cards');
const temlateCard = document.querySelector('#card').content;
const templatePopup = document.querySelector('#popup').content;
const initialCards = [
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


  const createPopup = (dataForm) => {
    const popup = templatePopup.querySelector('.popup').cloneNode(true);
    popup.querySelector('.popup__header').textContent = dataForm.namePopup;
    popup.querySelector('.popup__button').textContent = dataForm.textButton;
    popup.querySelector('.popup-name').placeholder = dataForm.namePlaceholder;
    popup.querySelector('.popup-description').placeholder = dataForm.descriptionPlaceholder;
    popup.querySelector('.button_close').addEventListener('click', () => {
      closePopup(popup);
    })
    popup.addEventListener('submit', (evt) => {
      dataForm.submitFormFunction(evt);
    });
    return popup;
  }
const popupEditProfile = createPopup({namePopup: 'Редактировать профиль',
                                      textButton: 'Сохранить', 
                                      submitFormFunction: handleSubmitEditProrileForm,
                                      namePlaceholder: '',
                                      descriptionPlaceholder: ''});

const popupAddCard = createPopup({namePopup: 'Новое место',
                                  textButton: 'Создать', 
                                  submitFormFunction: handleSubmitAddCardForm,
                                  namePlaceholder: 'Название',
                                  descriptionPlaceholder: 'Введите url'});

renderObject(popupEditProfile, document.body);
renderObject(popupAddCard, document.body);
  
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
  const inputValues = {
    name: profileName.textContent,
    description: profileDescription.textContent
  }
  openPopup(popupEditProfile, inputValues);
});

addCardButton.addEventListener('click', () => {
  openPopup(popupAddCard);
})


function openPopup (popup, inputValues = '') {
  if(inputValues != ''){
    nameField = popup.querySelector('.popup-name');
    descriptionField = popup.querySelector('.popup-description'); 
    nameField.value = inputValues.name;
    descriptionField.value = inputValues.description;
  }
  popup.classList.add('popup_opened');
}

function closePopup(popup) {
  popup.classList.remove('popup_opened')
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
