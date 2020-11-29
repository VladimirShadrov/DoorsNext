export class Menu {
  constructor(container, sitePagesArray, menuComponents) {
    this.menuContainer = document.querySelector(container);
    this.sitePages = sitePagesArray;
    this.menuItems = Array.from(this.menuContainer.querySelectorAll(menuComponents));

    this.init();
    // this.setActivePage();
  }

  init() {};

  setActivePage(id) {
    this.sitePages.forEach(page => {
      page.style.opacity = 0;
      setTimeout(function() {
        page.classList.add('hide');
      }, 500)
    });

    const currentPage = this.sitePages.find(cpage => cpage.dataset.id === id);
    console.log(currentPage)
    setTimeout(function() {
      currentPage.classList.remove('hide')
    }, 500);
    
    setTimeout(function() {
      currentPage.style.opacity = 1;

    }, 550)

  }
}

