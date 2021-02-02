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

    this.filterTitles = this.el.querySelectorAll('.goods-catalog__filter-title');
    this.inputPurpose = this.el.querySelectorAll('.purpose');
    this.inputOutside = this.el.querySelectorAll('.outside');
    this.inputInside = this.el.querySelectorAll('.inside');
  }



  renderCatalogSection() {
    this.catalogContainer.innerHTML = '';
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

  checkInputOutside(input, products) {

    let currentProducts = [];
    input.forEach(input => {
      if (input.checked) {
        currentProducts.push(products.filter(product => product.outside === input.dataset.id));
      }
    })

    let result = [].concat(...currentProducts)

    return result;
  }

  checkInputInside(input, products) {

    let currentProducts = [];
    input.forEach(input => {
      if (input.checked) {
        currentProducts.push(products.filter(product => product.inside === input.dataset.id));
      }
    })

    let result = [].concat(...currentProducts)

    return result;
  }

  clearInput(options) {
    options.forEach(item => {
      if (item.checked) {
        item.checked = false;
      }
    });
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

  if (event.target.classList.contains('goods-catalog__filter-title')) {
    event.stopImmediatePropagation();
    event.target.classList.toggle('active');
    event.target.nextElementSibling.classList.toggle('hide');
  }

  if (event.target.classList.contains('goods-catalog__choose')) {
    event.stopImmediatePropagation();

    let outsideTrim = this.checkInputOutside(this.inputOutside, this.catalogItems);
    this.catalogItemsContainer.innerHTML = '';
    this.renderCatalogItems(outsideTrim);

    let selectedProducts = this.checkInputInside(this.inputInside, outsideTrim);
    this.catalogItemsContainer.innerHTML = '';
    this.renderCatalogItems(selectedProducts);
  }

  if (event.target.classList.contains('goods-catalog__reset')) {
    this.clearInput(this.inputPurpose);
    this.clearInput(this.inputOutside);
    this.clearInput(this.inputInside);
  }





}