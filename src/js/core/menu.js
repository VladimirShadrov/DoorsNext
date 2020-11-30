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

      setTimeout(function() {
        page.classList.add('hide');
      }, 500)
    });
    

    setTimeout(function() {
      currentPage.classList.remove('hide')
    }, 500);
    
    setTimeout(function() {
      currentPage.style.opacity = 1;
    }, 510)
  }
}

