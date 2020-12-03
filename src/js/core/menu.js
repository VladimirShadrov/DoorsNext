export class Menu {
  constructor(container, sitePagesArray, menuComponents) {
    this.menuContainer = document.querySelector(container);
    this.sitePages = sitePagesArray;
    this.menuItems = Array.from(this.menuContainer.querySelectorAll(menuComponents));

    this.init();
  }

  init() {};

  setCurrentPageToSessionStorage(page) {
    sessionStorage.setItem('currentPage', page);
  }

  getCurrentPageFromSessionStorage() {
    let page = sessionStorage.getItem('currentPage') || 'main';
    return page
  }


  addPageClassActive() {
    let currentPageId = this.getCurrentPageFromSessionStorage();
    const currentPage = this.sitePages.find(page => page.dataset.id === currentPageId);

    this.sitePages.forEach(page => {
      page.style.opacity = 0;
      page.classList.add('hide');

    });
    
    window.scrollTo(0, 0);
    currentPage.classList.remove('hide')
    currentPage.style.opacity = 1;

  }
}

