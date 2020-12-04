import { Component } from '../core/component';
import { HeaderMenuComponent } from '../components/headerMenu.component';

export class TopBannerComponent extends Component {
  constructor(className, container, sitePagesArray, menuComponents) {
    super(className);

    this.navigation = new HeaderMenuComponent(container, sitePagesArray, menuComponents);

  }
  
  init() {
    this.el.addEventListener('click', catalogBtnClickHandler.bind(this));
  }
};

function catalogBtnClickHandler(event) {
  if (event.target.classList.contains('banner__to-catalog')) {
    this.navigation.removeActiveClassMenuItems();
    let currentPage = event.target.dataset.id || '';
    this.navigation.setCurrentPageToSessionStorage(currentPage);
    this.navigation.addPageClassActive();
  }
}