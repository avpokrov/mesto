export class ValidateForms {
    constructor(validateData, formElement) {
        this._submitButtonSelector = validateData.submitButtonSelector;
        this._inactiveButtonClass = validateData.inactiveButtonClass
        this._errorClass = validateData.errorClass;
        this._formElement = formElement;
        this._buttonElement = this._formElement.querySelector(this._submitButtonSelector);
        this._inputsElement = Array.from(formElement.querySelectorAll(validateData.inputSelector));
    }

    enableValidation() {
        this._setEventListeners(this._formElement);

    }

    resetValidation(){   
        this._checkButton();     
        this._inputsElement.forEach((inputElement) =>{
            this._hideInputError(inputElement);
        }); 
    }

    _setEventListeners() {
        this._inputsElement.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._isValid(inputElement);
                this._checkButton();
            })
        });
    }

    _showInputError(input, errorMessage) {
        const inputError = this._formElement.querySelector(`.${input.id}-error`);
        input.classList.add(this._errorClass);
        inputError.textContent = errorMessage;
    }

    _hideInputError(inputElement) {
        const inputError = this._formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.remove(this._errorClass);
        inputError.textContent = '';
    }

    _isValid(inputElement) {
        if (!inputElement.validity.valid) {
            this._showInputError(inputElement, inputElement.validationMessage);
        } else {
            this._hideInputError(inputElement);
        }
    }

    _hasInvalidInput() {
        return this._inputsElement.some((input) => {
            return !input.validity.valid;
        })
    }

    _checkButton() {
        if (!this._hasInvalidInput()) {
            this._buttonElement.disabled = false;
            this._buttonElement.classList.remove(this._inactiveButtonClass);
        } else {
            this._buttonElement.disabled = true;
            this._buttonElement.classList.add(this._inactiveButtonClass);
        }
    }

}