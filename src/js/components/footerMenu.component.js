import { Menu } from '../core/menu';

export class FooterMenuComponent extends Menu {
  constructor(container, sitePagesArray, menuComponents) {
    super(container, sitePagesArray, menuComponents);

  }

  init() {
    this.menuContainer.addEventListener('click', footerMenuClickHenlder.bind(this));
  };
}

function footerMenuClickHenlder(event) {
  let currentPage = event.target.dataset.id || '';
  this.setCurrentPageToSessionStorage(currentPage)

  if (event.target.classList.contains('footer__bottom-menu-item')) {
    this.addPageClassActive();
  }
};