import { Component } from '../core/component';
import { createSlide } from '../plugins/slidesCreator';
import { catalogItemsArray } from '../data/data';
import { CatalogComponent } from './catalog.component';

export class HitsComponent extends Component {
  constructor(className, catalog, catalogItems, sitePagesArray, productContainer) {
    super(className)
    this.sliderContainer = this.el.querySelector('.hits__slider-wrapper');
    this.slidesWrapper = this.el.querySelector('.hits__slider-row');
    this.slidesValue = 5;
    this.goodsForSlider = catalogItemsArray.slice(catalogItemsArray.length - this.slidesValue);
    this.catalog = new CatalogComponent(catalog, catalogItems, sitePagesArray, productContainer);
    this.menuItems = document.querySelectorAll('.header__menu-item');
    this.btnNext = this.el.querySelector('.hits__button-next');
    this.btnPrev = this.el.querySelector('.hits__button-prev');
    this.direction;

    this.createHitsSlider();
    this.slides = this.el.querySelectorAll('.hits__item');
    this.changeSlidePosition();
  }

  createHitsSlider() {
    let html;
    this.goodsForSlider.forEach(slide => {
      html = createSlide(slide);
      this.slidesWrapper.insertAdjacentHTML('afterbegin', html);
    })
  }

  moveSlidesToLeft() {
    this.direction = 'next';

    if (this.slidesWrapper.style.justifyContent === 'flex-end') {
      this.slidesWrapper.prepend(this.slidesWrapper.lastElementChild)
    }


    this.sliderContainer.style.justifyContent = 'flex-start';
    this.slidesWrapper.style.transform = 'translate(-20%)';
  }

  moveSlidesToRight() {
    if (this.direction === 'next' || !this.direction) {
      this.direction = 'prev';
      this.slidesWrapper.appendChild(this.slidesWrapper.firstElementChild)
    }

    this.sliderContainer.style.justifyContent = 'flex-end';
    this.slidesWrapper.style.transform = 'translate(20%)';
  }

  changeSlidePosition() {
    this.slidesWrapper.addEventListener('transitionend', (event) => {
      if (!event.target.classList.contains('hits__description-button'))
        if (this.direction === 'prev') {
          this.slidesWrapper.prepend(this.slidesWrapper.lastElementChild);
        } else {
          this.slidesWrapper.appendChild(this.slidesWrapper.firstElementChild);
        }

      this.slidesWrapper.style.transition = 'none';
      this.slidesWrapper.style.transform = 'translate(0)';
      setTimeout(() => {
        this.slidesWrapper.style.transition = '0.5s';
      })

    })
  }


  init() {
    this.el.addEventListener('click', sliderButtonClickHendler.bind(this));
  }
}

function sliderButtonClickHendler(event) {
  if (event.target.classList.contains('hits__description-button')) {
    this.menuItems.forEach(item => item.classList.remove('header__menu-item_active'));
    sessionStorage.setItem('currentProduct', event.target.dataset.id);
    this.catalog.pagesActivator.setCurrentPageToSessionStorage('product-card');
    this.catalog.pagesActivator.addPageClassActive();
    this.catalog.renderProductCardSection();
  }

  if (event.target === this.btnNext) {
    this.moveSlidesToLeft();
    // this.changeSlidePosition();
  }

  if (event.target === this.btnPrev) {
    this.moveSlidesToRight();
    // this.changeSlidePosition();
  }

}

function changeSlidePosition() {
  console.log(this.slidesWrapper)
}