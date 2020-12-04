import { Menu } from '../core/menu';

export class HeaderMenuComponent extends Menu {
  constructor(container, sitePagesArray, menuComponents) {
    super(container, sitePagesArray, menuComponents);

  }

  init() {
    this.menuContainer.addEventListener('click', menuClickHendler.bind(this));
  };

  removeActiveClassMenuItems() {
    this.menuItems.forEach(item => item.classList.remove('header__menu-item_active'));
  };

  setActiveClassMenuItem() {
    const menuItemId = this.getCurrentPageFromSessionStorage();
    this.removeActiveClassMenuItems();
    const activeMenuItem = this.menuItems.find(item => item.dataset.id === menuItemId);
    activeMenuItem.classList.add('header__menu-item_active');
  };


};

function menuClickHendler(event) {
  let currentPage = event.target.dataset.id || '';
  this.setCurrentPageToSessionStorage(currentPage)

  if (event.target.classList.contains('header__menu-item')) {
    this.setActiveClassMenuItem()
    this.addPageClassActive();
  }
};

