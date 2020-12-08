import { Component } from '../core/component';
import { catalogSectionCreator } from '../plugins/catalogSectionCreator';
import { catalogItemCtreator } from '../plugins/catalogItemCreator';
import { Menu } from '../core/menu';
import { productCardCreator } from '../plugins/productCardCreator';

export class CatalogComponent extends Component {
  constructor(className, catalogItems, sitePagesArray, productContainer) {
    super(className)
    this.catalogContainer = this.el.firstElementChild;
    this.catalogSection = catalogSectionCreator();
    this.catalogItems = catalogItems;
    this.pagesActivator = new Menu(className, sitePagesArray);
    this.productContainer = productContainer;
   
    this.renderCatalogSection();
    this.renderCatalogItems(catalogItems);
    this.renderProductCardSection();
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

  renderProductCardSection() {
    const currentProductId = sessionStorage.getItem('currentProduct') || this.catalogItems[this.catalogItems.length - 1].id;
    const currentProductItem = this.catalogItems.find(item => item.id === currentProductId);
    const productCreator = productCardCreator(currentProductItem);
    
    this.productContainer.firstElementChild.innerHTML = '';
    this.productContainer.firstElementChild.insertAdjacentHTML('afterbegin', productCreator);
  }
  
  init() {
    this.el.addEventListener('click', catalogItemClickHendler.bind(this));

  }
}

function catalogItemClickHendler(event) {

  if (event.target.classList.contains('goods-catalog__item-title')) {
    sessionStorage.setItem('currentProduct', event.target.dataset.id);
    this.pagesActivator.setCurrentPageToSessionStorage('product-card');
    this.pagesActivator.addPageClassActive();
    this.renderProductCardSection();
  }
}