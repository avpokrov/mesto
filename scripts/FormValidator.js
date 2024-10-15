export class FormValidator {
    constructor(form, data) {
        this._data = data;
        this._form = form;
    }

    enableValidation() {
        this._setEventListeners();
    }

    resetValidation() {
        this._checkButton();
        this._inputsElement.forEach(inputElement => {
            this._hideInputError(inputElement);
        });
    }

    _setEventListeners() {
        this._buttonElement = this._form.querySelector(this._data.submitButtonSelector);
        this._inputsElement = Array.from(this._form.querySelectorAll(this._data.inputSelector));
        this._checkButton();
        this._inputsElement.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._isValid(inputElement);
                this._checkButton();
            })
        });
    }
    _checkInputs() {
        this._inputsElement.forEach((inputElement) => {
            this._isValid(inputElement);
            this._checkButton();
        })
    };

    _isValid(inputElement) {
        if (!inputElement.validity.valid) {
            this._showInputError(inputElement, inputElement.validationMessage);
        } else {
            this._hideInputError(inputElement);
        }
    }
    _showInputError(input, errorMessage) {
        const inputError = this._form.querySelector(`.${input.id}-error`);
        input.classList.add(this._data.errorClass);
        inputError.textContent = errorMessage;
    }

    _hideInputError(inputElement) {
        const inputError = this._form.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.remove(this._data.errorClass);
        inputError.textContent = '';
    }
    _hasInvalidInput() {
        return this._inputsElement.some((input) => {
            return !input.validity.valid;
        })
    }
    _checkButton() {
        if (!this._hasInvalidInput()) {
            this._buttonElement.disabled = false;
            this._buttonElement.classList.remove(this._data.inactiveButtonClass);
        } else {
            this._buttonElement.disabled = true;
            this._buttonElement.classList.add(this._data.inactiveButtonClass);
        }
    }

}
