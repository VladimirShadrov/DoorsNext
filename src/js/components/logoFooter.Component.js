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
  if (event.target.parentNode.classList.contains('logo') ||
      event.target.parentNode.classList.contains('footer__item') ||
      event.target.parentNode.classList.contains('logo__description') ||
      event.target.parentNode.classList.contains('logo__title')) {
      sessionStorage.setItem('currentPage', 'main');
        this.logo.setActiveClassMenuItem();
        this.logo.addPageClassActive();
  }
}