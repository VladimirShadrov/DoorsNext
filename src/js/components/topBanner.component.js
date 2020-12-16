import { Component } from '../core/component';
import { ProductsSorter } from '../core/productsSorter';

export class TopBannerComponent extends Component {
  constructor(className, catalogItems, pages) {
    super(className)

    this.catalogItems = catalogItems;
    this.products = new ProductsSorter(catalogItems, pages);
  }
  
  init() {
    this.el.addEventListener('click', catalogBtnClickHandler.bind(this));
  }
};

function catalogBtnClickHandler(event) {
  if (event.target.classList.contains('banner__to-catalog')) {
    sessionStorage.setItem('currentPage', 'catalog');
    this.products.setProductsArrayToStorage(this.catalogItems);
    this.products.showCatalogPage();
    this.products.renderCorrectCatalogItems(this.catalogItems);
  }
}