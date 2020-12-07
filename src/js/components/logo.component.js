import { Component } from '../core/component';
import { HeaderMenuComponent } from './headerMenu.component';

export class LogoComponent extends Component {
  constructor(className, container, sitePagesArray, menuComponents) {
    super(className)

    this.logo = new HeaderMenuComponent(container, sitePagesArray, menuComponents);
  }
  
  init() {
    this.el.addEventListener('click', logoClickHendler.bind(this));
  }
}

function logoClickHendler(event) {
  if (event.target.parentNode.classList.contains('logo') || 
      event.target.parentNode.classList.contains('logo__description') || 
      event.target.parentNode.classList.contains('header__left-cell') || 
      event.target.parentNode.classList.contains('logo__title')) {
        sessionStorage.setItem('currentPage', 'main');
        this.logo.setActiveClassMenuItem();
        this.logo.addPageClassActive();
  }
}