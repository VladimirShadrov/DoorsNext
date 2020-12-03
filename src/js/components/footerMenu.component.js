import { Menu } from '../core/menu';
import { HeaderMenuComponent } from './headerMenu.component';

export class FooterMenuComponent extends Menu {
  constructor(container, sitePagesArray, menuComponents, headerMenuContainer, headerMenuItem, footer) {
    super(container, sitePagesArray, menuComponents);

    // this.footer = footer;
    // console.log(footer)
        
    this.headerMenu = new HeaderMenuComponent(headerMenuContainer, sitePagesArray, headerMenuItem);

  }

  init() {
    this.menuContainer.addEventListener('click', footerMenuClickHenlder.bind(this));
  };
}

function footerMenuClickHenlder(event) {
  let currentPage = event.target.dataset.id || '';
  this.setCurrentPageToSessionStorage(currentPage);

  if (event.target.classList.contains('footer__bottom-menu-item')) {
    this.addPageClassActive();
    this.headerMenu.setActiveClassMenuItem();
  }
};