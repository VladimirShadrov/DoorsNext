import '../styles/styles.scss';
import '../styles/header.scss';
import '../styles/modal.scss';
import '../styles/banner.scss';
import '../styles/hits.scss';
import '../styles/main-page-catalog.scss';
import '../styles/choose-us.scss';
import '../styles/how-to-choose.scss';
import '../styles/footer.scss';
import '../styles/about.scss';
import '../styles/delivery.scss';
import '../styles/price.scss';
import '../styles/guarantee.scss';
import '../styles/contacts.scss';
import '../styles/goods-catalog.scss';
import '../styles/product-card.scss';
import { BurgerMenuComponent } from './components/burgerMenu.component'
import { Callback } from './components/callback.component';
import { HeaderMenuComponent } from './components/headerMenu.component';
import { FooterMenuComponent } from './components/footerMenu.component';
import { TopBannerComponent } from './components/topBanner.component';
import { catalogSectionCreator } from './plugins/catalogSectionCreator';
import { CatalogComponent } from './components/catalog.component';
import { catalogItemsArray } from './data/data';
import { LogoComponent } from './components/logo.component';
import { LogoFooterComponent } from './components/logoFooter.Component';
import { HitsComponent } from './components/hits.component';


const header = document.querySelector('.header');
const footer = document.querySelector('.footer');
const mainPage = document.querySelector('.main-page');
const aboutUsSection = document.querySelector('.about');
const deliverySection = document.querySelector('.delivery');
const priceSection = document.querySelector('.price');
const guaranteeSection = document.querySelector('.guarantee');
const contactsSection = document.querySelector('.contacts');
const goodsCatalogSection = document.querySelector('.goods-catalog');
const productCardSection = document.querySelector('.product-card');
const headerMenuPages = [mainPage, aboutUsSection, deliverySection, priceSection, guaranteeSection, contactsSection, goodsCatalogSection, productCardSection];
const callbackPanel = document.querySelector('.callback-panel');
const catalogItems = Object.assign(catalogItemsArray).reverse();

new BurgerMenuComponent(header, headerMenuPages, '.header__menu-container', '.header__menu-item');
new Callback(callbackPanel);
const headerMenu = new HeaderMenuComponent('.header__menu-container', headerMenuPages, '.header__menu-item');
new FooterMenuComponent('.footer', headerMenuPages, '.header__menu-item');
new TopBannerComponent('.banner', '.header__menu-container', headerMenuPages, '.header__menu-item');
new CatalogComponent('.goods-catalog', catalogItems, headerMenuPages, productCardSection);
new LogoComponent('.header', '.header__menu-container', headerMenuPages, '.header__menu-item');
new LogoFooterComponent('.footer', '.header__menu-container', headerMenuPages, '.header__menu-item');
new HitsComponent('.hits');


function showCurrentSitePage() {
  const currentPage = headerMenu.getCurrentPageFromSessionStorage();

  headerMenu.addPageClassActive();

  if (currentPage === 'catalog' || currentPage === 'product-card') {
    headerMenu.removeActiveClassMenuItems();
  } else {
    headerMenu.setActiveClassMenuItem();
  }
};

showCurrentSitePage();


// Перенос изображений и шрифтов в папку "dist"
require.context('../images', true, /\.(png|jpg|svg|gif)$/);
