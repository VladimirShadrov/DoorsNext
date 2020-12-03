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


// Перенос изображений и шрифтов в папку "dist"
require.context('../images', true, /\.(png|jpg|svg|gif)$/);


const menu = new BurgerMenuComponent(header, headerMenuPages, '.header__menu-container', '.header__menu-item');
const callback = new Callback(callbackPanel);

const headerMenu = new HeaderMenuComponent('.header__menu-container', headerMenuPages, '.header__menu-item');

headerMenu.addPageClassActive();
headerMenu.setActiveClassMenuItem();

new FooterMenuComponent('.footer' , headerMenuPages,'.header__menu-item');
