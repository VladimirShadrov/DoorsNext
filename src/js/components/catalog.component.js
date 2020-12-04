import { Component } from '../core/component';
import { catalogSectionCreator } from '../plugins/catalogSectionCreator';
import { catalogItemCtreator } from '../plugins/catalogItemCreator';

export class CatalogComponent extends Component {
  constructor(className, catalogItems) {
    super(className)
    this.catalogContainer = this.el.firstElementChild;
    this.catalogSection = catalogSectionCreator();
    
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

  }
}