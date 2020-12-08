import { Component } from '../core/component';
import { catalogSectionCreator } from '../plugins/catalogSectionCreator';
import { catalogItemCtreator } from '../plugins/catalogItemCreator';
import { Menu } from '../core/menu';

export class CatalogComponent extends Component {
  constructor(className, catalogItems, sitePagesArray, menuComponents) {
    super(className)
    this.catalogContainer = this.el.firstElementChild;
    this.catalogSection = catalogSectionCreator();
    this.catalogItems = catalogItems;
    this.pagesActivator = new Menu(className, sitePagesArray, menuComponents);

   
    this.renderCatalogSection();
    this.renderCatalogItems(catalogItems);
  }


  
  renderCatalogSection() {
    this.catalogContainer.insertAdjacentHTML('afterbegin', this.catalogSection);
  }
  
  renderCatalogItems(options) {
    let html;
    this.catalogItemsContainer = this.el.querySelector('.goods-catalog__catalog-container');

    options.forEach(item => {
      html = catalogItemCtreator(item)
      this.catalogItemsContainer.insertAdjacentHTML('afterbegin', html);
    });
  }
  

  
  init() {
    this.el.addEventListener('click', catalogItemClickHendler.bind(this));

  }
}

function catalogItemClickHendler(event) {
  const currentItem = this.catalogItems.find(item => item.id === event.target.dataset.id);

  if (event.target.classList.contains('goods-catalog__item-title')) {
    this.pagesActivator.setCurrentPageToSessionStorage('product-card');
    this.pagesActivator.addPageClassActive();
  }
}