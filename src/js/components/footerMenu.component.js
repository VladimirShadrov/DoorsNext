import { Menu } from '../core/menu';
import { HeaderMenuComponent } from './headerMenu.component';


export class FooterMenuComponent extends Menu {
  constructor(container, sitePagesArray) {
    super(container, sitePagesArray)

    this.headerMenu = new HeaderMenuComponent('.header__menu-container', sitePagesArray, '.header__menu-item');

  }

  init() {
    this.menuContainer.addEventListener('click', footerMenuClickHendler.bind(this));
  }
}

function footerMenuClickHendler(event) {
  if (event.target.classList.contains('footer__menu-item') || event.target.classList.contains('footer__bottom-menu-item')) {
    let currentPage = event.target.dataset.id || '';
    this.setCurrentPageToSessionStorage(currentPage);
    this.headerMenu.setActiveClassMenuItem()
    this.addPageClassActive();
  }
}