const popupEditProfiele = document.querySelector('.popup');
const editProfileForm = popupEditProfiele.querySelector('.popup__form')
const nameInput = editProfileForm.querySelector('.popup-name');
const descriptionInput = editProfileForm.querySelector('.popup-description');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');
const editProfileButton = document.querySelector('.button_editProfile');
const closeButton = document.querySelector('.button_close');

editProfileButton.addEventListener('click', () => {
    openClosePopup(true);
});

closeButton.addEventListener('click', () => {
    openClosePopup(false);
});

popupEditProfiele.addEventListener('submit', handleSubmitEditProrileForm)

function openClosePopup (opened) {
    if (opened){
        nameInput.value = profileName.textContent;
        descriptionInput.value = profileDescription.textContent;
    }
    popupEditProfiele.classList.toggle('popup_opened');
}

function handleSubmitEditProrileForm(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileDescription.textContent = descriptionInput.value;
    openClosePopup (false);
    
}
