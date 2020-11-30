import { HeaderMenuComponent } from './headerMenu.component'

export class BurgerMenuComponent {
  constructor(selector, pages) {
    this.el = selector;
    this.topMenuList = Array.from(this.el.querySelectorAll('.header__menu-item'));
    this.sideMenu = document.querySelector('.side-menu');
    this.sideMenuActive = document.querySelector('.side-menu_active');
    this.sideMenuWrapper = document.querySelector('.side-menu__wrapper');
    this.catalogButton = this.el.querySelector('.header__catalog');
    this.sitePages = pages;
    this.responsiveMenu = new HeaderMenuComponent('.side-menu__wrapper', this.sitePages, '.side-menu__item');


    this.openBurgerMenu();
    this.catalogMenuToggle();
    this.init();
  }


  openBurgerMenu() {
    this.el.addEventListener('click', (event) => {

      if (event.target.classList.contains('header__menu-burger')) {
        this.sideMenu.classList.add('side-menu_active');
        this.hideCatalogMenu();
        setTimeout(() => this.sideMenuWrapper.classList.add('side-menu__wrapper_active'), 200);
      }
    });
  };

  closeBurgerMenu() {
    this.sideMenuWrapper.classList.remove('side-menu__wrapper_active');
    setTimeout(() => this.sideMenu.classList.remove('side-menu_active'), 300)
  };

  catalogMenuToggle() {
    this.catalogButton.addEventListener('click', (event) => {
      if (event.target.dataset.id === 'header-catalog-menu' ||
        event.target.classList.contains('header__catalog-icon') ||
        event.target.classList.contains('header__catalog-text')) {
        this.catalogButton.classList.toggle('header__catalog_active');
      }
    });
  };

  hideCatalogMenu() {
    this.catalogButton.classList.remove('header__catalog_active');
  };

  init() {
    this.sideMenu.addEventListener('click', menuClickHendler.bind(this));
  }


}

function menuClickHendler(event) {
  // let currentPage = event.target.dataset.id || '';

  if (event.target.classList.contains('side-menu__item')) {
    this.responsiveMenu.addPageClassActive();
    this.closeBurgerMenu();
  }

  if (event.target.dataset.id === 'close-side-menu' || event.target.classList.contains('side-menu_active')) {
    this.closeBurgerMenu()
  }

};






