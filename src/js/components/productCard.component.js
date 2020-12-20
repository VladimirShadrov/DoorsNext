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

  const tabs = Array.from(this.el.querySelectorAll('.product-card__navigation-item'));
  const tabsContent = Array.from(this.el.querySelectorAll('.product-card__tab'));
  const id = event.target.parentNode.dataset.id;
  const activeTab = tabsContent.find(tab => tab.dataset.id === id);

  if (event.target.dataset.id === 'catalog') {
    event.preventDefault();
    sessionStorage.setItem('currentPage', event.target.dataset.id);
    this.catalog.setProductsArrayToStorage(this.catalogItems);
    this.catalog.showCatalogPage();
    this.catalog.renderCorrectCatalogItems(this.catalogItems);
  }

  if (event.target.classList.contains('product-card__navigation-title')) {

    tabs.forEach(tab => tab.classList.remove('active'));
    event.target.parentNode.classList.add('active');
    tabsContent.forEach(tab => tab.classList.add('hide'));
    activeTab.classList.remove('hide');
  }
}

