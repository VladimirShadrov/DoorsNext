import { Menu } from '../core/menu';

export class HeaderMenuComponent extends Menu {
  constructor(container, sitePagesArray, menuComponents) {
    super(container, sitePagesArray, menuComponents);

  }
    

  init() {
    this.menuContainer.addEventListener('click', menuClickHendler.bind(this));
  }    
  
};

function menuClickHendler(event) {
  const currentPage = event.target.dataset.id
  this.setActivePage(currentPage)
}