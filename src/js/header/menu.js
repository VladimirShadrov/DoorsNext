export class Menu {
  constructor(selector) {
    this.el = selector;
    this.topMenuList = Array.from(this.el.querySelectorAll('.header__menu-item'));
    this.sideMenu = document.querySelector('.side-menu');
    this.sideMenuActive = document.querySelector('.side-menu_active');
    this.sideMenuWrapper = document.querySelector('.side-menu__wrapper');
    this.catalogButton = this.el.querySelector('.header__catalog');


    this.setClassActiveTopMenuItem();
    this.openBurgerMenu();
    this.closeBurgerMenu();
    this.catalogMenuToggle();
  }

  setClassActiveTopMenuItem() {
    this.el.addEventListener('click', (event) => {
      if (event.target.classList.contains('header__menu-item')) {
        this.topMenuList.forEach(item => item.classList.remove('header__menu-item_active'));
        event.target.classList.add('header__menu-item_active')
      }
    });
  };

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
    this.sideMenu.addEventListener('click', (event) => {

      if (event.target.dataset.id === 'close-side-menu' || event.target.classList.contains('side-menu_active')) {
        this.sideMenuWrapper.classList.remove('side-menu__wrapper_active');
        setTimeout(() => this.sideMenu.classList.remove('side-menu_active'), 300)
      }
    });

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


}





