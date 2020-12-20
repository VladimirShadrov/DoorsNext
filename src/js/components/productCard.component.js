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

  setActiveTab(tabs,id) {
    tabs.forEach(tab => tab.classList.remove('active'));
    const activeTab = tabs.find(tab => tab.dataset.id === id);
    activeTab.classList.add('active');
  }
  
  setActiveTabsContent(tabsContent, id) {
    tabsContent.forEach(tab => tab.classList.add('hide'));
    const activeTab = tabsContent.find(tab => tab.dataset.id === id);
    activeTab.classList.remove('hide');
  }
  
  
}

function productCardClickHendler(event) {
  
  const tabs = Array.from(this.el.querySelectorAll('.product-card__navigation-item'));
  const tabsContent = Array.from(this.el.querySelectorAll('.product-card__tab'));
  const tabsId = event.target.parentNode.dataset.id;
  const id = event.target.dataset.id;

  if (event.target.dataset.id === 'catalog') {
    event.preventDefault();
    sessionStorage.setItem('currentPage', event.target.dataset.id);
    this.catalog.setProductsArrayToStorage(this.catalogItems);
    this.catalog.showCatalogPage();
    this.catalog.renderCorrectCatalogItems(this.catalogItems);
  }

  if (event.target.classList.contains('product-card__navigation-title')) {
    this.setActiveTab(tabs, tabsId);
    this.setActiveTabsContent(tabsContent, id);
  }

  if (event.target.classList.contains('product-card__link')) {
    event.preventDefault();
    const tabTitle = this.el.querySelector('.product-card__navigation-container');
    const coordinates = tabTitle.getBoundingClientRect();
    const tabCoordinates = coordinates.top + window.pageYOffset;

    window.scrollTo({
      top: tabCoordinates,
      left: 0,
      behavior: 'smooth'
    })

    this.setActiveTab(tabs, id);
    this.setActiveTabsContent(tabsContent, id);

  }
}

