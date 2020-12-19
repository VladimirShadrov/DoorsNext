export class Callback {
  constructor(selector) {
    this.el = selector;
    this.callbackBtn = document.querySelector('.header__callback');
    this.sideCallbackBtn = document.querySelector('.callback-btn');
    this.callBackPanelWrapper = this.el.querySelector('.callback-panel__wrapper');
    this.callBackPanelBtn = document.querySelector('.callback-panel__btn');
    this.input = document.querySelector('.callback-panel__form');
    this.modalOverlay = document.querySelector('.callback-panel__modal');
    this.modal = document.querySelector('.callback-panel__modal-wrapper');
    this.modalBtn = document.querySelector('.callback-panel__modal-button');


    this.openSidePanel();
    this.closeSidePanel();
    this.callMeBackButton();
  }

  openSidePanel() {
    document.body.addEventListener('click', (event) => {

      if (event.target.classList.contains('header__callback') || event.target.classList.contains('callback-btn') || event.target.classList.contains('callback-btn__icon') || event.target.dataset.id === 'order') {
        this.showSidePanel();
      }
    })
  };

  showSidePanel() {
    this.el.classList.add('callback-panel_active');
    this.sideCallbackBtn.classList.add('hide');
    setTimeout(() => {
      this.callBackPanelWrapper.classList.add('callback-panel__wrapper_active')
    }, 300);
  };

  closeSidePanel() {
    this.el.addEventListener('click', (event) => {
      if (event.target.classList.contains('callback-panel_active') || event.target.classList.contains('callback-panel__link')) {
        this.hideSidePanel();
      }
    })
  };

  hideSidePanel() {
    this.callBackPanelWrapper.classList.remove('callback-panel__wrapper_active');
    setTimeout(() => {
      this.el.classList.remove('callback-panel_active')
      this.sideCallbackBtn.classList.remove('hide');
    }, 300);
  };

  callMeBackButton() {
    this.callBackPanelBtn.addEventListener('click', () => {
      let resultValidation = this.phoneNumberValidator()
      
      if (resultValidation) {
        this.openModal();
        this.clearInput();
        this.modal.insertAdjacentHTML('afterbegin', sayThankYouModal());
        this.enteredCorrectPhoneNumber();

      } else {
        this.addErrorToInput();
        this.openModal();
        this.modal.insertAdjacentHTML('afterbegin', enterCorrectPhoneNumber());
        this.enteredUncorrectPhoneNumber();
      }
    });
  };

  openModal() {
    this.modalOverlay.classList.add('callback-panel__modal_active')
    this.modal.classList.add('callback-panel__modal-wrapper_active');
    this.modal.innerHTML = '';
  };

  closeModal() {
    this.modal.classList.remove('callback-panel__modal-wrapper_active');
    setTimeout(() => this.modalOverlay.classList.remove('callback-panel__modal_active'), 200);
  };

  addErrorToInput() {
    this.input.style.border = '1px solid red';
    this.input.style.color = 'red';
  };

  clearInput() {
    this.input.style.border = '1px solid rgba(255, 255, 255, 0.6)';
    this.input.style.color = 'rgb(255, 255, 255)';
    this.input.value = '';
  };

  enteredUncorrectPhoneNumber() {
    this.modal.addEventListener('click', (event) => {
      if (event.target.dataset.name === 'uncorrect-phone-number') {
        this.clearInput();
        this.closeModal();
      }
    });
  };

  enteredCorrectPhoneNumber() {
    this.modal.addEventListener('click', (event) => {
      if (event.target.dataset.name === 'correct-phone-number') {
        this.clearInput();
        this.closeModal();
        this.hideSidePanel();
      }
    });
  }

  phoneNumberValidator() {
    let phoneNumber = this.input.value;
    const regularExprestion = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/i;
    let result = regularExprestion.test(phoneNumber)
    return result;
  }




}

function enterCorrectPhoneNumber() {
  return `
      <p class="callback-panel__modal-text">
        пожалуйста, введите номер телефона в следующем формате: <br>
        <span>код страны (код города) номер телефона</span> <br>
        например: <br>
        +7(123)123-45-67 <br>
        +71231234567 <br>
        81231234567 <br>
      </p>
      <button class="callback-panel__modal-button" data-name="uncorrect-phone-number">Понятно</button>
  `
};

function sayThankYouModal() {
  return `
    <p class="callback-panel__modal-text">
      спасибо! <br>
      в ближайшее время с Вами свяжется наш сотрудник.
    </p>
    <button class="callback-panel__modal-button" data-name="correct-phone-number">Понятно</button>
  `
}