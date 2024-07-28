function enableValidation(data) {
    forms = Array.from(document.querySelectorAll(data.formSelector));
    forms.forEach((form) => {
        setEventListeners(form, data);
    })
}

function setEventListeners (formElement, data){
    const buttonElement = formElement.querySelector(data.submitButtonSelector);
    const inputsElement = Array.from(formElement.querySelectorAll(data.inputSelector));
    checkButton(buttonElement, inputsElement, data);
    inputsElement.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
            isValid(formElement, inputElement, data);
            checkButton(buttonElement, inputsElement, data);
        })
    });
}

function checkInputs(formElement, inputList, buttonElement, data) {
    inputList.forEach((inputElement) => {
        isValid(formElement, inputElement, data);
        checkButton(buttonElement, inputList, data);
        })
    };

function showInputError(formElement, input, errorMessage, data) {
    const inputError = formElement.querySelector(`.${input.id}-error`);
    input.classList.add(data.errorClass);
    inputError.textContent = errorMessage;
}

function hideInputError(formElement, inputElement, data) {
    const inputError = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(data.errorClass);
    inputError.textContent = '';
}

function isValid(formElement, inputElement, data) {
   if(!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, data);
   } else {
    hideInputError(formElement, inputElement, data);
   }
}

function hasInvalidInput(inputList) {
    return inputList.some((input) => {
        return !input.validity.valid;
    })
}

function checkButton(buttonElement, inputList, data) {
    if(!hasInvalidInput(inputList)) {
        buttonElement.disabled = false;
        buttonElement.classList.remove(data.inactiveButtonClass);
    } else {
        buttonElement.disabled = true;
        buttonElement.classList.add(data.inactiveButtonClass);
    }
}