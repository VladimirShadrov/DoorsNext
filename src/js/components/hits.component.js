import { Component } from '../core/component';
import { createSlide } from '../plugins/slidesCreator';
import { catalogItemsArray } from '../data/data';
import { CatalogComponent } from './catalog.component';
import { HeaderMenuComponent } from './headerMenu.component';

export class HitsComponent extends Component {
  constructor(className, catalog, catalogItems, sitePagesArray, productContainer, container, menuComponents) {
    super(className)
    this.slidesWrapper = this.el.querySelector('.hits__slider-row');
    this.slidesValue = 5;
    this.goodsForSlider = catalogItemsArray.slice(catalogItemsArray.length - this.slidesValue);
    this.catalog = new CatalogComponent(catalog, catalogItems, sitePagesArray, productContainer);
    this.header = new HeaderMenuComponent(container, sitePagesArray, menuComponents);


    this.createHitsSlider()
  }

  createHitsSlider() {
    let html;
    this.goodsForSlider.forEach(slide => {
      html = createSlide(slide);
      this.slidesWrapper.insertAdjacentHTML('afterbegin', html);
    })
  }

  init() {
   this.el.addEventListener('click', sliderButtonClickHendler.bind(this)); 
  }
}

function sliderButtonClickHendler(event) {
  if (event.target.classList.contains('hits__description-button')) {
    this.header.removeActiveClassMenuItems();
    sessionStorage.setItem('currentProduct', event.target.dataset.id);
    this.catalog.pagesActivator.setCurrentPageToSessionStorage('product-card');
    this.catalog.pagesActivator.addPageClassActive();
    this.catalog.renderProductCardSection();
  }
  
}