import { Component } from '../core/component';
import { createSlide } from '../plugins/slidesCreator';
import { catalogItemsArray } from '../data/data';

export class HitsComponent extends Component {
  constructor(className) {
    super(className)
    this.slidesWrapper = this.el.querySelector('.hits__slider-row');
    this.slidesValue = 5;
    this.slidesData = catalogItemsArray.slice(catalogItemsArray.length - this.slidesValue);


    this.createHitsSlider()
  }

  createHitsSlider() {
    let html;
    this.slidesData.forEach(slide => {
      html = createSlide(slide);
      this.slidesWrapper.insertAdjacentHTML('afterbegin', html);
    })
  }

  init() {
    
  }
}