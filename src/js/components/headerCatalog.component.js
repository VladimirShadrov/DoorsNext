import { Component } from '../core/component';
import { ProductsSorter } from '../core/productsSorter';

export class HeaderCatalogComponent extends Component {
  constructor(className, catalogItems, pages) {
    super(className)

    this.catalogItems = catalogItems;
    this.products = new ProductsSorter(catalogItems, pages);
  }

  init() {
    this.el.addEventListener('click', goToCatalog.bind(this))
  }

  removeClassActive() {
    this.el.classList.remove('header__catalog_active');
  }
}

function goToCatalog(event) {
  sessionStorage.setItem('currentPage', 'catalog');
  const currentProductId = event.target.dataset.id;

  if (event.target.classList.contains('header__catalog-item')) {
    const currentProductsArray = this.products.createProductsArray(currentProductId);
    this.products.setProductsArrayToStorage(currentProductsArray);
    this.products.showCatalogPage();
    this.products.renderCorrectCatalogItems(currentProductsArray);
    this.removeClassActive();
  }
}