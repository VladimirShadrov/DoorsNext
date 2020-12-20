import { Component } from '../core/component';
import { HeaderMenuComponent } from './headerMenu.component';

export class LogoFooterComponent extends Component {
  constructor(className, container, sitePagesArray, menuComponents) {
    super(className, container, sitePagesArray, menuComponents)

    this.logo = new HeaderMenuComponent(container, sitePagesArray, menuComponents);
  }

  init() {
    this.el.addEventListener('click', logoClickHendler.bind(this));
  }
}

function logoClickHendler(event) {
  if (event.target.classList.contains('logo__img') ||
    event.target.classList.contains('logo') ||
    event.target.classList.contains('logo__logo') ||
    event.target.classList.contains('logo__first-word') ||
    event.target.classList.contains('logo__second-word') ||
    event.target.classList.contains('logo__description-text')) {
    sessionStorage.setItem('currentPage', 'main');
    this.logo.setActiveClassMenuItem();
    this.logo.addPageClassActive();
  }
}