import { Component } from '../core/component';
import { ProductsSorter } from '../core/productsSorter';

export class MainCatalogComponent extends Component {
  constructor(className, catalogItems, pages) {
    super(className)

    this.catalogItems = catalogItems;
    this.products = new ProductsSorter(catalogItems, pages);


  }

  init() {
    this.el.addEventListener('click', goToCatalog.bind(this));
  }
}

function goToCatalog(event) {
  const currentProductId = event.target.dataset.id;

  if (event.target.classList.contains('main-catalog__item-button')) {
    
    sessionStorage.setItem('currentPage', 'catalog');
    const currentProductsArray = this.products.createProductsArray(currentProductId);
    this.products.showCatalogPage();
    this.products.renderCorrectCatalogItems(currentProductsArray);



  }

}