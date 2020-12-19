import { Component } from "../core/component";
import { ProductsSorter } from "../core/productsSorter";
import { catalogItemsArray } from "../data/data";

export class ProductCardComponent extends Component {
  constructor(className, catalogItems, pages) {
    super(className)

    this.catalogItems = catalogItems;
    this.catalog = new ProductsSorter(catalogItems, pages);

  }
  
  init() {
    this.el.addEventListener('click', productCardClickHendler.bind(this));
  }
}

function productCardClickHendler(event) {
  if (event.target.dataset.id === 'catalog') {
    event.preventDefault();
    sessionStorage.setItem('currentPage', event.target.dataset.id);
    this.catalog.setProductsArrayToStorage(this.catalogItems);
    this.catalog.showCatalogPage();
    this.catalog.renderCorrectCatalogItems(this.catalogItems);
  }
}

