import { catalogItemCtreator } from '../plugins/catalogItemCreator';

export class ProductsSorter {
  constructor(products, pages) {
    this.productsArray = products;
    this.sitePages = pages;

  }

  createProductsArray(id) {
    let currentProduct;
    const currentProductArray = [];

    switch (id) {
      case 'vinyl':
        currentProduct = 'Винилискожа'
        break;
      case 'laminate':
        currentProduct = 'Ламинат'
        break;
      case 'dust':
        currentProduct = 'Порошковое напыление'
        break;
      default:
        currentProduct = 'МДФ'
        break;
    }

    this.productsArray.filter(item => {
      if (item.inside === currentProduct || item.outside === currentProduct) {
        currentProductArray.push(item)
      }
    })

    return currentProductArray;
  }

  showCatalogPage() {
    const catalogPage = this.sitePages.find(page => page.dataset.id === 'catalog');

    this.sitePages.forEach(page => {
      page.style.opacity = 0;
      page.classList.add('hide');

    });

    window.scrollTo(0, 0);
    catalogPage.classList.remove('hide')
    catalogPage.style.opacity = 1;
    document.querySelectorAll('.header__menu-item').forEach(item => item.classList.remove('header__menu-item_active'))
  }

  renderCorrectCatalogItems(options) {
    const catalogWrapper = document.querySelector('.goods-catalog__catalog-container');
    let html;
    catalogWrapper.innerHTML = '';
    options.forEach(item => {
      html = catalogItemCtreator(item)
      catalogWrapper.insertAdjacentHTML('afterbegin', html);
    })
  }

  setProductsArrayToStorage(options) {
    sessionStorage.setItem('currentProducts', JSON.stringify(options));
  }
}